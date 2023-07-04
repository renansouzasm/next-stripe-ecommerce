import React, { useState, useEffect } from "react";

function App() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [idVerificacao, setIdVerificacao] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  useEffect(() => {
    const storedUsuarios = localStorage.getItem("usuarios");
    if (storedUsuarios) {
      setUsuarios(JSON.parse(storedUsuarios));
    }
  }, []);

  const adicionarUsuario = () => {
    const usuarioExistente = usuarios.find((usuario) => usuario.id === id);

    if (usuarioExistente) {
      const usuariosAtualizados = usuarios.map((usuario) => {
        if (usuario.id === id) {
          return { ...usuario, qtd: usuario.qtd + 1 };
        }
        return usuario;
      });
      setUsuarios(usuariosAtualizados);
      localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
    } else {
      const novoUsuario = { id, nome, qtd: 1 };
      const usuariosAtualizados = [...usuarios, novoUsuario];
      setUsuarios(usuariosAtualizados);
      localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
    }
  };

  const removerUsuario = () => {
    const usuarioExistente = usuarios.find(
      (usuario) => usuario.id === idVerificacao
    );

    if (usuarioExistente) {
      const usuariosAtualizados = usuarios.filter(
        (usuario) => usuario.id !== idVerificacao
      );
      setUsuarios(usuariosAtualizados);
      localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));
      setMensagemErro("");
    } else {
      setMensagemErro("ID de verificação inválido");
    }
    setIdVerificacao("");
  };

  return (
    <div>
      <h1>Programa de Usuários</h1>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <br />
      <button onClick={adicionarUsuario}>Adicionar</button>
      <br />
      <label>
        ID de Verificação:
        <input
          type="text"
          value={idVerificacao}
          onChange={(e) => setIdVerificacao(e.target.value)}
        />
      </label>
      <button onClick={removerUsuario}>Remover</button>
      <p style={{ color: "red" }}>{mensagemErro}</p>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.id} - {usuario.nome} - {usuario.qtd}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
