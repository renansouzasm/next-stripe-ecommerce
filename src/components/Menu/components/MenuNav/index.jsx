import "./style.css";

export const MenuNav = ({ Link, setMenu }) => {
  return (
    <div className="menuNav">
      <ul>
        <button className="navBtn uppercase disabled">Conta</button>

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

        <button className="navBtn uppercase disabled">Categorias</button>

        <button className="navBtn uppercase disabled">Favoritos</button>

        <button className="navBtn uppercase disabled">Contato</button>

        <button className="navBtn uppercase disabled">Ajuda</button>

        <button className="navBtn uppercase disabled">Políticas</button>

        <button className="navBtn uppercase disabled">Redes Sociais</button>
      </ul>
    </div>
  );
};
