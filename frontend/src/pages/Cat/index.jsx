import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";
import { createCat, updateCat } from "../../api/cat";

export default function Cat() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isUpdate, cat } = location.state || {};

  const handleBackClick = () => {
    navigate("/felinos");
  };

  const [id, setId] = useState(cat?.id || "");
  const [breed, setBreed] = useState(cat?.breed || "");
  const [image, setImage] = useState(cat?.image || "");
  const [temperament, setTemperament] = useState(cat?.temperament || "");

  const handleSummit = async (e) => {
    try {
      e.preventDefault();
      let responseApi;
      if (isUpdate) {
        responseApi = await updateCat(id, { breed, image, temperament });
      } else {
        responseApi = await createCat({ breed, image, temperament });
      }

      if (responseApi.id) {
        navigate("/felinos");
      } else {
        console.log(responseApi);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        return toast.error("Sem permissão.");
      }
      if (error.status === 401 || error.status === 404) {
        return toast.error("Email ou senha inválido, tente novamente!");
      }
      toast.error("Erro inesperado, tente novamente mais tarde!");
    }
  };

  return (
    <>
      <div className="div-cadastro">
        <h2 className="title-cadastro">Cadastro de Gato!</h2>
      </div>

      <div className="card-cadastro">
        <form>
          <div className="row">
            <div className="input-container">
              <label htmlFor="raca">Raça</label>
              <input
                type="texto"
                id="raca"
                name="raca"
                placeholder="raca"
                required
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="url"
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="temperament">
              <label htmlFor="temperament">Temperamento</label>
              <input
                type="texto"
                id="temperament"
                name="temperament"
                placeholder="temperament"
                required
                value={temperament}
                onChange={(e) => setTemperament(e.target.value)}
              />
            </div>
          </div>

          {/* Botões */}
          <div className="btn">
            <button type="submit" className="btn-enviar" onClick={handleSummit}>
              Enviar
            </button>
            <button
              type="button"
              className="btn-cancelar"
              onClick={handleBackClick}
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
