import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function CatCard({
  data: cat,
  viewButton,
  onClickUpdate,
  onClickDelete,
}) {
  return (
    <div className="cat-card">
      <div className="cat-image">
        <>
          <p className="raca">
            Raça: <strong> {cat.breed}</strong>
          </p>
          <p className="temp">Temperamento: {cat.temperament}</p>
          {viewButton && (
            <>
              <button onClick={onClickUpdate}>E</button>
              <button onClick={onClickDelete}>D</button>
            </>
          )}
        </>
        <img className="cats" src={cat.image} alt="Imagem de Gato" />
      </div>
      <div className="cat-info">
        <Link to="/felino">
          <p>🤍🤍🤍</p>
          <h3 className="cat-name">
            curiosidades aleatórias
            <br /> Clique Aqui...
          </h3>
        </Link>
      </div>
    </div>
  );
}
