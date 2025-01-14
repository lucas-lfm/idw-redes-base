import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";
import searchIcon from "./../assets/search-icon.svg";
import cinelibLogo from "/cine-lib.svg";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    navigate(`/search?q=${query}`);

    setQuery("");
  };

  return (
    <header>
      <nav id='navbar'>
        <div id='brand'>
          <a href='/'>
            <img src={cinelibLogo} alt='Logo CineLib' />
            <h2>CineLib</h2>
          </a>
        </div>
        <form onSubmit={search} id='search-form'>
          <input
            type='text'
            placeholder='Busque um filme...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit'>
            <img src={searchIcon} alt='Ícone de pesquisa' />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default NavBar;