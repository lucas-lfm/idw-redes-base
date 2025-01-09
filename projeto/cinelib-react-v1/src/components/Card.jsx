/* eslint-disable react/prop-types */
import "./Card.css";
import starIcon from "./../assets/star-icon.svg";

const Card = ( { filme } ) => {
  return (
    <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt={`Imagem de divulgação do filme ${filme.title}`} />
        <h2>{filme.title}</h2>
        <p>
            <img src={starIcon} alt="Ícone de estrela para indicar nota de avaliação" /> {filme.vote_average.toFixed(2)}
        </p>
        <a href="">Detalhes</a>
    </div>
  );
};

export default Card;