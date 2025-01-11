import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTIyMGU5MWJhNjlhOTNjYmY1YmQ1N2MyMDYxZjljMCIsIm5iZiI6MTcyMzE0MDE2OC4yMzY3ODEsInN1YiI6IjY2YWJlZDUzMWI2ZTIyNmMxMGExMzcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nfIwiYY0em29_GsRaaEPA03jb765B0R0u_lNmNBEwGw`,
  },
};

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {

      try {
        
        const resposta = await fetch(url, options).then((resposta) => resposta.json());
        setDados(resposta);

      } catch (error) {
        console.log("Erro ao buscar dados: ", error);
      }

    };

    buscarDados();
  }, [url]);

  return { dados };
};
