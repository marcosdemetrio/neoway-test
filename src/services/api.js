import axios from 'axios'

const API_URL = 'https://newsapi.org/v2'
const API_KEY = import.meta.env.VITE_API_KEY

export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/everything?q=javascript&apiKey=${API_KEY}`)
    return response.data.articles
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return []
  }
}
