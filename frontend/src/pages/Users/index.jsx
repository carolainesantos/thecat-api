import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { deleteUserAdmin, getAllUsers } from "../../api/user";

export default function ListUsers() {
  const [table, setTable] = useState();
  const navigate = useNavigate();

  function handleAddClick() {
    navigate("/user");
  }

  function handleClickUpdate(user) {
    navigate("/user", { state: { isUpdate: true, user } });
  }

  async function handleClickDelete(id) {
    try {
      const confirmDelete = window.confirm("Tem certeza que deseja deletar?");
      if (!confirmDelete) return;

      await deleteUserAdmin(id);
      await listar();
      toast.success("Deletado com Sucesso");
    } catch (error) {
      if (error.status === 403) {
        toast.warn("Você não possui permissão");
      }
    }
  }

  function ajustarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    console.log(data)
    return `${dia}/${mes}/${ano}`;
  }

  async function listar() {
    setTable(await carregarUser());
  }

  async function carregarUser() {
    const response = await getAllUsers();
    console.log(response);
    return response.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.tel}</td>
        <td style={{ textAlign: "center" }}>{ajustarData(new Date(user.dtNasc))}</td>
        <td>{user.cep}</td>
        <td>{user.email}</td>
        <td>{user.blocked ? "sim" : "não"}</td>
        <td>
          <FaEdit
            className="icon"
            onClick={() => handleClickUpdate(user)}
            title="Alterar"
          />
          <FaTrashAlt
            className="icon"
            onClick={() => handleClickDelete(user.id)}
            title="Deletar"
          />
        </td>
      </tr>
    ));
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <div id="users-page">
      <div className="container-add-user">
        <h1 className="Title">Usuários Cadastrados</h1>
        <button className="incluir-novo" onClick={handleAddClick}>
          Incluir Usuário
        </button>
      </div>

      <div id="users-cards-container">
        <div class="table-test">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Data de Nascimento</th>
                <th>Cep</th>
                <th>Email</th>
                <th>Bloqueado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
