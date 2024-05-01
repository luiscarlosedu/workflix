import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../../services/Api';
import Loader from '../../components/Loader';
import './index.css';

function Filmes() {
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '4da872a62aa3992fa983bce40c10efd9',
                }
            })
            
            .then((response) => {
                setLoading(false);
                setFilme(response.data);
            })

            .catch(() => {
                navigate('/', {replace: true});
            })
        }

        loadFilme();

        return () => {
            console.log('componente foi desmontado');
        }
    }, [navigate, id]);
    
    function saveFilm() {
        const film = localStorage.getItem('@workflix');

        let savedFilms = JSON.parse(film) || [];

        const hasFilm = savedFilms.some((savedfilm) => savedfilm.id === filme.id);

        if(hasFilm) {
            window.alert('This movie has already been saved!');
            return;
        }

        savedFilms.push(filme);
        localStorage.setItem('@workflix', JSON.stringify(savedFilms));
        window.alert('Saved movie');
    }

    if(loading) {
        return(
            <Loader/>
        )
    }

    return(
        <main className="container2">
            <article className='film-info' key={filme.id}>
                <h2>{filme.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

                <h3>Synopsis</h3>
                <p>{filme.overview}</p>
                <strong>Vote Average: {filme.vote_average} / 10</strong>

                <div className="btn-area-film">
                    <button onClick={saveFilm}>Save</button>
                    <button>
                        <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target='blank' rel='external'>Trailler</a>
                    </button>
                </div>
            </article>
        </main>
    )
}

export default Filmes;