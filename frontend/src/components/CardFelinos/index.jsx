import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function CatCard({
  data: cat,
  viewButton,
  onClickUpdate,
  onClickDelete,
}) {
  return (
    <div className="cat-card">
      <div className="cat-image">
        <p className="raca">
          <div>
            Raça: <strong> {cat.breed}</strong>
          </div>
          {viewButton && (
            <div className="actions">
              <FaEdit
                className="icon"
                onClick={onClickUpdate}
                title="Alterar"
              />
              <FaTrashAlt
                className="icon"
                onClick={onClickDelete}
                title="Deletar"
              />
            </div>
          )}
        </p>
        <p className="temp">Temperamento: {cat.temperament}</p>
        <img className="cats" src={cat.image} alt="Imagem de Gato" />
      </div>
      <div className="cat-info">
        <Link to="/felino">
          <p>🤍🤍🤍</p>
          <h3 className="cat-name">Curiosidades aqui!</h3>
        </Link>
      </div>
    </div>
  );
}
