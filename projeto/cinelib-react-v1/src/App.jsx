import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTIyMGU5MWJhNjlhOTNjYmY1YmQ1N2MyMDYxZjljMCIsIm5iZiI6MTcyMzE0MDE2OC4yMzY3ODEsInN1YiI6IjY2YWJlZDUzMWI2ZTIyNmMxMGExMzcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nfIwiYY0em29_GsRaaEPA03jb765B0R0u_lNmNBEwGw`
  }
};

const URL_FETCH = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";

const App = () => {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const buscarFilmes = async () => {

      try {
        
        const dados = await fetch(URL_FETCH, options).then((resposta) => resposta.json());
        setFilmes(dados.results);

      } catch (error) {
        console.log("Erro ao buscar filmes: ", error);
      }

    };

    buscarFilmes();
  }, []);

  return (
    <>
      <NavBar />

      <main>
        <div className="container">

          <h2 className="title">Filmes Populares:</h2>

          <div className="movies-container">
            {filmes.map((filme) => (
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
