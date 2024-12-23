import {
  House,
  Heart,
  ShoppingBag,
  User,
  Notches,
} from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, useLocation } from "react-router";
import { Context } from "../context/Context";

export function NavBar() {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/product";
  const isCart = location.pathname === "/cart";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-9 w-full rounded-full flex gap-4 justify-between items-center max-w-96 md:max-w-[640px] lg:max-w-96 lg:hidden">
      <Link to={"/"} className={`btnNavBar ${isHome ? "flex-1" : "w-9"}`}>
        <button>
          <House />
        </button>
      </Link>

      <Link to={"#"} className={`btnNavBar`}>
        <button>
          <Heart />
        </button>
      </Link>

      <Link to={"/cart"} className={`btnNavBar ${isCart ? "flex-1" : "w-9"}`}>
        <button>
          <ShoppingBag />
        </button>
      </Link>

      <Link to={"#"} className={`btnNavBar`}>
        <button>
          <User />
        </button>
      </Link>

      <Link to={"#"} className={`btnNavBar`}>
        <button onClick={toggleMenu}>
          <Notches />
        </button>
      </Link>
    </nav>
  );
}
