import "./Footer.css";

import { GithubLogo } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © 2023 Todos os Direitos Reservados</p>
      <a href="https://github.com/renansouzasm/React-store" target="_blank">
        <p className="github">
          <GithubLogo size={14} /> GitHub
        </p>
      </a>
    </footer>
  );
};
