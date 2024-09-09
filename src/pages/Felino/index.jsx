import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Felino = () => {
  const [catFact, setCatFact] = useState(""); // Estado para armazenar a curiosidade
  const [catImage, setCatImage] = useState("");
  const navigate = useNavigate();

  // Fetch da 2ª API
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.data[0]); // Atualiza o estado com a curiosidade recebida
      })
      .catch((error) =>
        console.error("Erro ao carregar a curiosidade:", error)
      );

    // Busca a imagem da 1ª Api
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((response) => response.json())
      .then((data) => {
        setCatImage(data[0].url); // Atualiza o estado com a URL da imagem
      })
      .catch((error) => console.error("Erro ao carregar a imagem:", error));
  }, []);

  return (
    <div className="felino-page-info">
      <h1 id="title-curiosidades">Fatos & Curiosidades !</h1>
      <div className="felino-content2">
        {catImage && <img className="info-cat2" src={catImage} alt="Gato" />}
        <div className="info">
          <p>{catFact}</p>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};

export default Felino;
