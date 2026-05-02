import { useEffect, useState } from "react";

const PerfilDeUsuario = ({ usuarioId }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Simula uma chamada de API para buscar os dados do usuário
    const fetchUsuario = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${usuarioId}`,
        );
        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    fetchUsuario();
  }, [usuarioId]);

  return <div>{usuario ? usuario.name : "Carregando..."}</div>;
};

export default PerfilDeUsuario;
