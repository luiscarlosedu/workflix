import './index.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

function Favorites() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    useEffect(() => {
        const savedFilms = localStorage.getItem('@workflix');
        setFilmes((JSON.parse(savedFilms)) || []);
        setLoading(false);
    }, []);

    function deleteMovie(index) {
        const updateMovie = [...filmes];
        updateMovie.splice(index, 1);
        setFilmes(updateMovie);
        localStorage.setItem('@workflix', JSON.stringify(updateMovie));
    }

    if (filmes.length === 0) {
        return (
            <div className="dont-have-movies">
                <h1>My favorites movies</h1>
                <h2>You don't have favorite movies yet :/</h2>
                <Link to='/' className='Acess-more'>Acess for more</Link>
            </div>
        )
    }

    if(loading) {
        return (
            <Loader/>
        )
    }

    return(
        <main className="favorites-movies">
            <h2>My favorites movies</h2>
            <ul>
                {filmes.map((film, index) => {
                    return (
                        <li key={film.id}>
                            <span>{film.title}</span>
                            <div>
                                <Link to={`/movie/${film.id}`}>Details</Link>
                                <button onClick={() => deleteMovie(index)}>Delete</button>
                            </div>
                        </li>
                    )
                })}                    
            </ul>
        </main>
    )
}

export default Favorites;