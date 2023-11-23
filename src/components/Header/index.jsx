import "./style.css";

import {
  GameController,
  MagnifyingGlass,
  ShoppingCartSimple,
  List,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

export const Header = () => {
  const { setQuery, setMenu } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <GameController size={32} />
        <h1 className="logoName">React Store</h1>
      </Link>

      <div className="logo"></div>

      <div className="headerRight">
        <form method="GET" className="searchBar" onSubmit={handleSearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="Pesquisar"
            required
            onChange={({ target }) => setSearch(target.value)}
          />

          <button className="btnSearch">
            <MagnifyingGlass size={22} />
          </button>
        </form>

        <Link to={"/cart"}>
          <button className="btnCart">
            <ShoppingCartSimple size={22} />
          </button>
        </Link>

        <button className="btnMenu" onClick={() => setMenu(true)}>
          <List size={22} />
        </button>
      </div>
    </header>
  );
};
