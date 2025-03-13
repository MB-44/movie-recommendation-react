import MovieCard from "../components/movieCard" 
import { useState } from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Wild Robot", releaseDate: "2024"},
        {id: 2, title: "second Robot", releaseDate: "2025"},
        {id: 3, title: "third Robot", releaseDate: "2023"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movieInfo={movie} key={movie.id}/>
                )
                )}
            </div>
        </div>
    )
}