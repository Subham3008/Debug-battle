import { useCallback } from "react";
import { getLinks, incrementLinkClick } from "../services/home.api.js";

export const useHome = () => {
  const fetchLinks = useCallback(async ({ username }) => {
    try {
      const links = await getLinks({ username })
      return links
    } catch (error) {
      console.error(error)
      throw error
    }
  }, [])

  const trackLinkClick = useCallback(async ({ linkId }) => {
    try {
      return await incrementLinkClick({ linkId })
    } catch (error) {
      console.error(error)
      return null
    }
  }, [])

  return {
    fetchLinks,
    trackLinkClick
  }
}
