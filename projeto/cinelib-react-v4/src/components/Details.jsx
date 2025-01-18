import "./Details.css";

import starIcon from "./../assets/star-icon.svg";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

const URL_IMG_BASE = "https://image.tmdb.org/t/p/original";
const URL_FETCH = "https://api.themoviedb.org/3/movie/";

const Details = ({ filme }) => {
    const { dados: videos } = useFetch(`${URL_FETCH}${filme.id}/videos?language=pt-BR`);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        if (videos) {
            const trailers = videos.results.filter((video) => video.type === "Trailer");

            if (trailers.length > 0) {
                setTrailer(trailers[0].key);
            }
        }
    }, [videos]);

    return (
        <div className='details'>
            <div className='basic-info'>
                <img className='img-poster' src={`${URL_IMG_BASE}${filme.poster_path}`} alt='' />

                <h3>Gêneros:</h3>
                <ul className='generos'>
                    {filme.genres.map((genero) => (
                        <li key={genero.id}> {genero.name} </li>
                    ))}
                </ul>

                <h3>Avaliação Média: </h3>
                <p>
                    <img src={starIcon} alt='Ícone de estrela para indicar nota de avaliação' />{" "}
                    <span>
                        {filme.vote_average.toFixed(2)} ({filme.vote_count})
                    </span>
                </p>
            </div>

            <div className='more-info'>
                {trailer && (
                    <iframe
                        width='560'
                        height='315'
                        src={`https://www.youtube.com/embed/${trailer}`}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen>
                    </iframe>
                )}

                <h3>Resumo:</h3>
                <p>{filme.overview}</p>
            </div>
        </div>
    );
};

export default Details;