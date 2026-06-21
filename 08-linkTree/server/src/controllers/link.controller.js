import linkModel from "../models/link.model.js"
import userModel from "../models/user.model.js"

const getDateKey = (date = new Date()) => date.toISOString().slice(0, 10)

const getLastSevenDays = () => {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - index))

    return {
      date: getDateKey(date),
      clicks: 0,
    }
  })
}

export const createLink = async (req, res) => {
  const user = req.user
  const { title, url } = req.body

  if (!title || !url) {
    return res.status(400).json({
      message: 'Title and URL are required',
    });
  }

  try {

    const newLink = await linkModel.create({
      user: user.id,
      title,
      url,
    })

    return res.status(201).json({
      message: 'Link created successfully',
      link: newLink,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || 'Failed to create link',
    });
  }
}

export const getLinksByUsername = async (req, res) => {
  const { username } = req.params

  const user = await userModel.findOne({ username })

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  const links = await linkModel.find({ user: user._id })

  return res.status(200).json({
    message: 'Link retrived successfully',
    links,
  });
}

export const incrementLinkClick = async (req, res) => {
  const { linkId } = req.params

  const link = await linkModel.findById(linkId)

  if (!link) {
    return res.status(404).json({
      message: 'Link not found'
    })
  }

  link.clicks += 1
  const today = getDateKey()
  const todayActivity = link.clickHistory.find((activity) => activity.date === today)

  if (todayActivity) {
    todayActivity.clicks += 1
  } else {
    link.clickHistory.push({
      date: today,
      clicks: 1,
    })
  }

  await link.save()

  return res.status(200).json({
    message: 'Link click incremented successfully',
    link,
  });
}

export const getAnalyticsByUsername = async (req, res) => {
  const { username } = req.params

  try {
    const user = await userModel.findOne({ username })

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      })
    }

    if (user._id.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not allowed to view this user's analytics",
      })
    }

    const links = await linkModel.find({ user: user._id }).sort({ clicks: -1 })
    const lastSevenDays = getLastSevenDays()
    const clicksByDate = new Map(lastSevenDays.map((day) => [day.date, day.clicks]))

    links.forEach((link) => {
      link.clickHistory.forEach((activity) => {
        if (clicksByDate.has(activity.date)) {
          clicksByDate.set(activity.date, clicksByDate.get(activity.date) + activity.clicks)
        }
      })
    })

    const totalLinks = links.length
    const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0)
    const topLink = links[0] || null
    const averageClicks = totalLinks ? Number((totalClicks / totalLinks).toFixed(1)) : 0

    return res.status(200).json({
      message: "Analytics retrieved successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      summary: {
        totalLinks,
        totalClicks,
        averageClicks,
        topLink: topLink
          ? {
            id: topLink._id,
            title: topLink.title,
            url: topLink.url,
            clicks: topLink.clicks,
          }
          : null,
      },
      lastSevenDays: lastSevenDays.map((day) => ({
        date: day.date,
        clicks: clicksByDate.get(day.date),
      })),
      links: links.map((link) => ({
        id: link._id,
        title: link.title,
        url: link.url,
        clicks: link.clicks,
        createdAt: link.createdAt,
      })),
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Failed to retrieve analytics",
    })
  }
}
