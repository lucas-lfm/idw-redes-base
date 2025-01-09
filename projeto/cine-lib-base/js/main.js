const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTIyMGU5MWJhNjlhOTNjYmY1YmQ1N2MyMDYxZjljMCIsIm5iZiI6MTcyMzE0MDE2OC4yMzY3ODEsInN1YiI6IjY2YWJlZDUzMWI2ZTIyNmMxMGExMzcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nfIwiYY0em29_GsRaaEPA03jb765B0R0u_lNmNBEwGw'
    }
};

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Júlio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let URL_IMAGES = "https://image.tmdb.org/t/p/w500";

const buscarFilmes = async () => {
    let filmes = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
                        .then(response => response.json());
    return filmes;
}

document.addEventListener("DOMContentLoaded", async () => {
    let containerFilmes = document.querySelector('#movies-container');

    let filmes = await buscarFilmes();

    console.log(filmes);

    filmes.results.map((result) => {
        let releaseDate = new Date(result.release_date);
        releaseDate = `${months[releaseDate.getMonth()]} de ${releaseDate.getFullYear()}`;
        let title = result.title;
        let imagePath = URL_IMAGES + result.poster_path;
        let voteAverage = result.vote_average;

        containerFilmes.innerHTML += 
        `<div class="movie-card">
            <img
                src="${imagePath}"
                alt="Divertida Mente 2"
            />
            <h2>${title}</h2>
            <p>
            <img src="./img/star-icon.svg" alt="Ícone de estrela para indicar nota de avaliação">
            ${voteAverage.toFixed(2)}
            </p>
            <a href="">Detalhes</a>
        </div>`;
    });
});