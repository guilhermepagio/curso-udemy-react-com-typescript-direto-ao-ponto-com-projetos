import { useEffect, useState } from "react";

import axios from "axios";

type Postagem = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ExibirPostagens = () => {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPostagens = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Postagem[]>(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setPostagens(response.data.slice(0, 5));
      } catch (error) {
        console.error("Erro ao buscar postagens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostagens();
  }, []);

  return (
    <div>
      <h2>Postagens</h2>
      {loading ? (
        <p>Carregando postagens...</p>
      ) : (
        postagens.map((postagem) => (
          <div key={postagem.id}>
            <h3>{postagem.title}</h3>
            <p>{postagem.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ExibirPostagens;
