import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { AuthContext } from "../../auth/Context";
import { useNavigate } from "react-router-dom";
import { deleteUser, getContext, updateUser } from "../../api/user";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Profile() {
  const { logout } = useContext(AuthContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [dtNasc, setDtNasc] = useState("");
  const [blocked, setBlocked] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");

  const [updName, setUpdName] = useState("");
  const [updTel, setUpdTel] = useState("");
  const [updDtNasc, setUpdDtNasc] = useState("");
  // Aqui blocked
  const [updCep, setUpdCep] = useState("");
  const [updEmail, setUpdEmail] = useState("");
  const [updPassword, setUpdPassword] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  async function carregarPerfil() {
    try {
      const { user } = await getContext();
      if (user.id) {
        setId(user.id);
        setName(user.name);
        setTel(user.tel);
        setDtNasc(user.dtNasc);
        setCep(user.cep);
        setEmail(user.email);
      }
    } catch (error) {
      toast("Erro inesperado, tente novamente mais tarde!");
    }
  }

  const handleSaveUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser({
        name: updName,
        tel: updTel,
        dtNasc: updDtNasc,
        cep: updCep,
        email: updEmail,
        password: updPassword,
      });

      if (response.id) {
        setName(updName);
        setTel(updTel);
        setDtNasc(updDtNasc);
        setCep(updCep);
        setEmail(updEmail);
        setIsUpdate(false);
      }
    } catch (error) {
      console.log(error);
      toast("Erro inesperado, tente novamente mais tarde!");
    }
  };

  const handleClickUpdate = () => {
    setIsUpdate(true);
    setUpdName(name);
    setUpdTel(tel);
    setUpdDtNasc(dtNasc);
    setUpdCep(cep);
    setUpdEmail(email);
  };

  const handleClickDelete = async () => {
    try {
      const response = prompt("Para confirmar exclusão digite seu email:");

      if (response === email) {
        const apiResponse = await deleteUser(id);
        if (apiResponse.status === 204) {
          logout();
          navigate("/");
        }
      } else {
        toast("Nome Inválido, processo cancelado.");
      }
    } catch (error) {
      toast("Erro inesperado, tente novamente mais tarde!");
    }
  };

  useEffect(() => {
    async function getConteudo() {
      await carregarPerfil();
    }
    getConteudo();
  }, []);

  return (
    <div className="profile">
      <div className="info">
        <div className="icons">
          <FaEdit onClick={handleClickUpdate} className="icon edit-icon" />
          <FaTrashAlt
            onClick={handleClickDelete}
            className="icon delete-icon"
          />
        </div>
        <h1>Dados do seu perfil</h1>
        <p>
          Nome:
          {!isUpdate ? (
            name
          ) : (
            <input
              type="name"
              id="name"
              value={updName}
              onChange={(e) => setUpdName(e.target.value)}
            />
          )}
        </p>
        <p>
          Email:
          {!isUpdate ? (
            email
          ) : (
            <input
              type="email"
              id="email"
              value={updEmail}
              onChange={(e) => setUpdEmail(e.target.value)}
            />
          )}
        </p>
        <p>
          Cep:
          {!isUpdate ? (
            cep
          ) : (
            <input
              type="numero"
              id="cep"
              value={updCep}
              onChange={(e) => setUpdDtNasc(e.target.value)}
            />
          )}
        </p>
        <p>
          Telefone:
          {!isUpdate ? (
            tel
          ) : (
            <input
              type="numero"
              id="tel"
              value={updTel}
              onChange={(e) => setUpdTel(e.target.value)}
            />
          )}
        </p>
        <p>
          Data de Nascimento:
          {!isUpdate ? (
            dtNasc
          ) : (
            <input
              type="dtNasc"
              id="dtNasc"
              value={updDtNasc}
              onChange={(e) => setUpdDtNasc(e.target.value)}
            />
          )}
        </p>

        {isUpdate && (
          <p>
            Senha:
            <input
              type="text"
              id="password"
              value={updPassword}
              onChange={(e) => setUpdPassword(e.target.value)}
            />
          </p>
        )}
        {!isUpdate ? (
          <div className="actions"></div>
        ) : (
          <div className="actions">
            <button onClick={() => setIsUpdate(false)}>Cancelar</button>
            <button className="primary" onClick={handleSaveUpdate}>
              Salvar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
