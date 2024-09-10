import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CatCard = () => {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    // Fetch da 1ª API
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setCatImage(data[0].url);
      })
      .catch((error) => console.error("Erro ao carregar a imagem:", error));
  }, []);

  return (
    <div className="cat-card">
      <div className="cat-image">
        <img className="cats" src={catImage} alt="Imagem de Gato" />
      </div>
      <div className="cat-info">
        <Link to="/felino">
          <p>🤍🤍🤍</p>
          <h3 className="cat-name">
            Para ver algumas curiosidades aleatórias
            <br /> Clique Aqui...
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default CatCard;
