import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router";

export function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`bg-bgColor1 fixed top-0 right-0 h-full w-64 shadow-lg z-40 transform transition-transform ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleMenu}
      >
        <nav className="flex flex-col gap-3 p-4 text-textColor1">
          <Link to={"/"} className="w-full">
            <button className="w-full text-left" onClick={toggleMenu}>
              Home
            </button>
          </Link>

          <Link to={"/cart"} className="w-full">
            <button className="w-full text-left" onClick={toggleMenu}>
              Cart
            </button>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="bg-black fixed inset-0 bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
