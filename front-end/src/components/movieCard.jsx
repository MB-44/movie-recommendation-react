
export default function MovieCard({movieInfo}) {

    function onFavoriteClick() {
        alert("Clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movieInfo.url} alt={movieInfo.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movieInfo.title}</h3>
                <p>{movieInfo.releaseDate}</p>
            </div>
        </div>
    )
}