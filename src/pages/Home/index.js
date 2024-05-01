import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './index.css';
import Image from '../../images/imageDesktopMobile.png';

// https://api.themoviedb.org/3/movie/now_playing?api_key=4da872a62aa3992fa983bce40c10efd9
import api from '../../services/Api';
import Loader from "../../components/Loader";

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: '4da872a62aa3992fa983bce40c10efd9',
                    page: 1,
                }
            })
        setFilmes((response.data.results.splice(0, 20)));
        }

        loadFilmes();
        setLoading(false);

    }, []);

    const list = [...filmes].sort((a, b) => b.vote_average - a.vote_average);
    const topList = list.splice(0, 3);

    if(loading) {
        return(
            <Loader/>
        )
    }

    return(
        <main className="container">
            <section className="title">
               <div className="title-h1">
                   <h1>Simplify your <br /> <span className="title-span">Entertainment!</span></h1>
               </div>
               <div className="title-text">
                <h2>The best way to rest and have fun!</h2>
               </div>
               <div className="btn-area">
                <a href="https://github.com/luiscarlosedu" target="blank">About</a>
                <a href="https://www.themoviedb.org/" target="blank">Credits</a>
               </div>
            </section>
            
            <div className="linear-footer">
                <div><img src={Image} /></div>
                <p>Available for multiple screens!</p>
            </div>
            
            <section className="films-rate">
                <h2>Most Rated</h2>
                <div className="card-area">
                    {topList.map((filme) => {
                        return(
                            <div key={filme.id} className="card">
                                <aside>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                                </aside>
                                <article>
                                    <h3>{filme.title}</h3>
                                    <p>Rating: {filme.vote_average} / 10</p>
                                    <Link className="link-film" to={`/movie/${filme.id}`}>Acess</Link>
                                </article>
                            </div>
                        )
                        })}
                </div>
                <p className="p-films">Data provided by <a href="https://www.themoviedb.org/" target="blank">themoviedb</a></p>
            </section>
            
            <section className="home-content">
                
                <h2>Film Catalog</h2>
                {filmes.map((filme) => {
                    return(
                        <section className="content-film">
                            <article key={filme.id}>
                                <div className="content-film-text">
                                    <h3>{filme.title}</h3>
                                    <h4>{filme.vote_average}</h4>
                                    <strong>Popularity: {filme.popularity}</strong>
                                    <Link  id="link-content" className="link-film" to={`movie/${filme.id}`}>Acess</Link>
                                </div>
                            </article>
                            <aside>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            </aside>
                        </section>
                    )
                })}
            </section>
                
        </main>
        
    )
}

export default Home;