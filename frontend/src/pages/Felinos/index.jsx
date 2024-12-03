import { useContext, useEffect, useState } from "react";
import CatCard from "../../components/CardFelinos";
import "./styles.css";
import { deleteCat, getCats } from "../../api/cat";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../auth/Context";
import AddButton from "../../components/AddButton";

export default function Felinos() {
  const { role } = useContext(AuthContext);
  const [list, setList] = useState();
  const navigate = useNavigate();

  function handleAddClick() {
    navigate("/cat");
  }

  function handleClickUpdate(cat) {
    navigate("/cat", { state: { isUpdate: true, cat } });
  }

  async function handleClickDelete(id) {
    try {
      const confirmDelete = window.confirm("Tem certeza que deseja deletar?");
      if (!confirmDelete) return;

      await deleteCat(id);
      toast.success("Deletado com Sucesso");
      await listar();
    } catch (error) {
      if (error.status === 403) {
        toast.warn("Você não possui permissão");
      }
    }
  }

  async function listar() {
    setList(await carregarCats());
  }

  async function carregarCats() {
    const response = await getCats();
    return response.map((cat) => (
      <CatCard
        key={cat.id}
        data={cat}
        viewButton={role === "admin"}
        onClickUpdate={() => handleClickUpdate(cat)}
        onClickDelete={() => handleClickDelete(cat.id)}
      />
    ));
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <div id="felinos-page">
      <h1 className="Title">Encante-se com os felinos mais fofos!</h1>
      <div id="felinos-conteudo">Role a página para ver nossos felinos</div>
      <div id="cat-cards-container">{list}</div>
      {role === "admin" ? <AddButton onClick={handleAddClick} /> : null}
    </div>
  );
}
