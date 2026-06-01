import { useState } from "react";
import { toast } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import { fetchMovies } from "./services/movieService";
import type { Movie } from "./types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      setMovies([]);

      const data = await fetchMovies(query);

      if (data.length === 0) {
        toast.error("No movies found for your request.");
        return;
      }

      setMovies(data);
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {/* MovieGrid тут */}
    </>
  );
}

export default App;
