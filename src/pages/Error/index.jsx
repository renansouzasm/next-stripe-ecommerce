import "./style.css";

import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="errorContainer">
      <h1>404!</h1>
      <p className="goBack">Voltar para <Link to={"/"}>Home</Link>?</p>
    </div>
  );
};
