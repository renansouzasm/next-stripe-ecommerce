import "./style.css";

import { Link } from "react-router-dom";
import { AppContext } from "../../../../context/AppContext";
import { useContext } from "react";

export const MenuNav = () => {
  const { setMenu } = useContext(AppContext);

  return (
    <div className="menuNav">
      <ul>
        <Link>
          <button className="navBtn uppercase disabled">Conta</button>
        </Link>
        <Link to={"/"}>
          <button className="navBtn uppercase" onClick={() => setMenu(false)}>
            Home
          </button>
        </Link>
        <Link to={"/cart"}>
          <button className="navBtn uppercase" onClick={() => setMenu(false)}>
            Carrinho
          </button>
        </Link>
        <Link>
          <button className="navBtn uppercase disabled">Categorias</button>
        </Link>
        <Link>
          <button className="navBtn uppercase disabled">Favoritos</button>
        </Link>
        <Link>
          <button className="navBtn uppercase disabled">Contato</button>
        </Link>
        <Link>
          <button className="navBtn uppercase disabled">Ajuda</button>
        </Link>
        <Link>
          <button className="navBtn uppercase disabled">Políticas</button>
        </Link>
        <Link>
          <button className="navBtn uppercase disabled">Redes Sociais</button>
        </Link>
      </ul>
    </div>
  );
};
