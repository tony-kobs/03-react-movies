import axios from "axios";
import type { Movie } from "../types/movie";

const API_KEY = "твойAPIключ";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

/*
{
  params: {
    // твої параметри
  },
  headers: {
    Authorization: `Bearer твійТокен`,
  }
} */
