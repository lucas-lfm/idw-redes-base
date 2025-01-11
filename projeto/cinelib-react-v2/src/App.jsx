import { useFetch } from "./hooks/useFetch";

import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';

const URL_FETCH = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";

const App = () => {

  const { dados: filmes } = useFetch(URL_FETCH);

  return (
    <>
      <NavBar />

      <main>
        <div className="container">

          <h2 className="title">Filmes Populares:</h2>

          <div className="movies-container">
            {filmes && filmes.results.map((filme) => (
              <Card key={filme.id} filme={filme} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
