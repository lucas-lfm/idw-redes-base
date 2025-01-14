import { useFetch } from "./../../hooks/useFetch";
import Card from "./../../components/Card";

import "./Home.css";

const URL_FETCH = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";

const Home = () => {
  const { dados: filmes } = useFetch(URL_FETCH);

  return (
    <div id='home'>
      <h2 className='title'>Filmes Populares:</h2>

      <div className='movies-container'>
        {filmes &&
          filmes.results.map((filme) => <Card key={filme.id} filme={filme} />)}
      </div>
    </div>
  );
};

export default Home;
