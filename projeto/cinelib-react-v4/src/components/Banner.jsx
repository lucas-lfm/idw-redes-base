import "./Banner.css";

const URL_IMG_BASE = "https://image.tmdb.org/t/p/original";

const Banner = ({ filme }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={`${URL_IMG_BASE}${filme.backdrop_path}`} alt='' />
      <div className='banner-title'>
        <h1>{`${filme.title} (${new Date(filme.release_date).getFullYear()})`}</h1>
      </div>
    </div>
  );
};

export default Banner;