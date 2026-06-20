import jwt from "jsonwebtoken"
import User from "../models/user.model";
import { generateToken } from "../shared/utils/token";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    })

    if (userExists) {
      return res.status(409).json({
        message: 'User already exists',
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    res.cookie('token', generateToken(user._id))

    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      }
    })
  } catch (err) {
    return res.status(500).json({
      message: error.message || 'Failed to register user',
    });
  }
}



export const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    const isPasswordValid = await user.matchPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    res.cookie('token', generateToken(user._id))

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || 'Failed to login user',
    });
  }
};