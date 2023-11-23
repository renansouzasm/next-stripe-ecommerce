import "./style.css";

import { SearchBar } from "./components/SearchBar";
import { MenuOpenBtn } from "./components/MenuOpenBtn";
import { CartBtn } from "./components/CartBtn";

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

      <div className="headerRight">
        <SearchBar
          MagnifyingGlass={MagnifyingGlass}
          handleSearch={handleSearch}
          setSearch={setSearch}
        />

        <Link to={"/cart"}>
          <CartBtn ShoppingCartSimple={ShoppingCartSimple} />
        </Link>

        <MenuOpenBtn List={List} setMenu={setMenu} />
      </div>
    </header>
  );
};
