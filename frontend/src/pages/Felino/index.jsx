import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import translate from "translate";
translate.engine = "google";
import { toast } from "react-toastify";
import "./styles.css";

const Felino = () => {
  const [catFact, setCatFact] = useState("");
  const [catImage, setCatImage] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      // Fetch 2ª Api
      const factResponse = await fetch("https://meowfacts.herokuapp.com/");
      const { data } = await factResponse.json();
      const factDataTranslated = await translate(data, "pt");
      setCatFact(factDataTranslated);

      // imagem de gato da 1ª Api
      const imageResponse = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=1"
      );
      const imageData = await imageResponse.json();
      setCatImage(imageData[0].url);
    } catch (error) {
      toast.error("Erro ao carregar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="felino-page-info">
      <div className="conteudo">
      <div className="container-fatos">
        <h1 id="title-curiosidades">Fatos & Curiosidades!</h1>
        <div className="felino-content2">
          {catImage && <img className="info-cat2" src={catImage} alt="Gato" />}
          <div className="info">
            <p>{catFact}</p>
          </div>
        </div>
        </div>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </div>
    </div>
  );
};

export default Felino;
