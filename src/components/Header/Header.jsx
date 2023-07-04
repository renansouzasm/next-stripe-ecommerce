import "./Header.css";

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
  const { setQuery } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <header className="header">
      <Link to={"/"} className="logoGroup">
        <p className="logo">
          <GameController size={32} /> <strong>React Store</strong>
        </p>
      </Link>

      <div className="input-wrapper">
        <form method="GET" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar"
            required
            onChange={({ target }) => setSearch(target.value)}
          />
          <MagnifyingGlass size={16} />
        </form>
      </div>

      <div className="btns">
        <Link to={"/cart"}>
          <button className="btn-cart">
            <ShoppingCartSimple size={32} />
          </button>
        </Link>
        <button className="btn-menu">
          <List size={32} />
        </button>
      </div>
    </header>
  );
};
