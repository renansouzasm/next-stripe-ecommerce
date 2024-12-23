import { GameController, Notches } from "@phosphor-icons/react";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router";
import { useContext } from "react";
import { Context } from "../context/Context";

export function Header() {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-16 px-3 flex justify-center items-center lg:justify-between lg:px-16">
      <Link to={"/"}>
        <h1 className="text-base items-center gap-3 hidden lg:flex">
          <GameController /> React Store
        </h1>
      </Link>

      <div className="flex justify-center gap-4 w-full lg:w-auto">
        <SearchBar />

        <button
          className="hover:bg-bgColor2 ease-in-out text-sm min-h-9 min-w-9 rounded-full hidden justify-center items-center lg:flex"
          onClick={toggleMenu}
        >
          <Notches />
        </button>
      </div>
    </header>
  );
}
