import { useSearchParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import Card from "../../components/Card";

import "./Search.css";

const URL_FETCH =
  "https://api.themoviedb.org/3/search/movie";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { dados: filmes } = useFetch(`${URL_FETCH}?query=${query}&language=pt-BR`);

  return (
    <div id='search'>
      <h2 className='title'>
        Resultados para: <span className='query-text'>{query}</span>
      </h2>

      <div className='movies-container'>
        {filmes &&
          filmes.results.map((filme) => <Card key={filme.id} filme={filme} />)}
      </div>
    </div>
  );
};

export default Search;