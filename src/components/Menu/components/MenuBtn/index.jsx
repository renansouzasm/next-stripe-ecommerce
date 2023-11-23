import "./style.css";

import { X } from "@phosphor-icons/react";
import { AppContext } from "../../../../context/AppContext";
import { useContext } from "react";

export const MenuBtn = () => {
  const { setMenu } = useContext(AppContext);

  return (
    <button className="menuBtn" onClick={() => setMenu(false)}>
      <X size={22} />
    </button>
  );
};
