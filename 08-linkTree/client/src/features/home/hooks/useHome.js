import { useCallback } from "react";
import { getLinks } from "../services/home.api.js";

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

  return {
    fetchLinks
  }
}
