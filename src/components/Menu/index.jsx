import "./style.css";

import { MenuBtn } from "./components/MenuBtn";
import { MenuNav } from "./components/MenuNav";

import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const Menu = () => {
  const { menu } = useContext(AppContext);

  return (
    <div
      className="menu"
      style={menu == true ? {display: "block"} : {display: "none"}}
    >
      <MenuBtn />
      <MenuNav />
    </div>
  );
};
