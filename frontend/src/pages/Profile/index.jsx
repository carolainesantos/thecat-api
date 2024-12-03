import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { AuthContext } from "../../auth/Context";
import { useNavigate } from "react-router-dom";
import { deleteUser, getContext, updateUser } from "../../api/user";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import DetailPerfil from "../../assets/img/detail-perfil.png";
import ImgPerfil from "../../assets/img/img-perfil.png";

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
 
  const [updCep, setUpdCep] = useState("");
  const [updEmail, setUpdEmail] = useState("");
  const [updPassword, setUpdPassword] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  function ajustarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    console.log(data)
    return `${dia}/${mes}/${ano}`;
  }

  async function carregarPerfil() {
    try {
      const { user } = await getContext();
      if (user.id) {
        setId(user.id);
        setName(user.name);
        setTel(user.tel);
        setDtNasc(ajustarData(new Date(user.dtNasc)));
        setCep(user.cep);
        setEmail(user.email);
      }
    } catch (error) {
      toast.error("Erro inesperado, tente novamente mais tarde!");
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
      toast.error("Erro inesperado, tente novamente mais tarde!");
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
        toast.error("Nome Inválido, processo cancelado.");
      }
    } catch (error) {
      toast.error("Erro inesperado, tente novamente mais tarde!");
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

        <div className="profile-header">
          
          <img className="imgPerfil" src={ImgPerfil} alt="Img-Perfil" />

          <div>
            <h1>Dados do Perfil</h1>
            <img className="detailPerfil" src={DetailPerfil} alt="Detail-Perfil" />
          </div>

          <div className="icons">
            <FaEdit onClick={handleClickUpdate} className="icon edit-icon" />
            <FaTrashAlt
              onClick={handleClickDelete}
              className="icon delete-icon"
            />
          </div>
        </div>

        
        <div className="profile-info">
          <p className="nome">
            Nome: &nbsp;
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
            Email: &nbsp;
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
            Cep: &nbsp;
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
            Telefone: &nbsp;
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
            Data de Nascimento: &nbsp;
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
              Senha: &nbsp;
              <input
                type="text"
                id="password"
                value={updPassword}
                onChange={(e) => setUpdPassword(e.target.value)}
              />
            </p>
          )}
        </div>
        {!isUpdate ? (
          <div className="actions"></div>
        ) : (
          <div className="actions">
            <button className="voltar-dados" onClick={() => setIsUpdate(false)}>Voltar</button>
            <button className="salvar" onClick={handleSaveUpdate}>
              Salvar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
