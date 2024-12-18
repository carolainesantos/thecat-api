import { createUser, createUserAdmin, updateUserAdmin } from "../../api/user";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";

export default function User() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isUpdate, user } = location.state || {};

  const handleBackClick = () => {
    navigate("/users");
  };

  const [id, setId] = useState(user?.id || "");
  const [name, setName] = useState(user?.name || "");
  const [tel, setTel] = useState(user?.tel || "");
  const [dtNasc, setDtNasc] = useState(user?.dtNasc || "");
  const [cep, setCep] = useState(user?.cep || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState(user?.password || "");

  const handleSummit = async (e) => {
    try {
      e.preventDefault();
      let responseApi;
      if (isUpdate) {
        responseApi = await updateUserAdmin(id, {
          name,
          tel,
          dtNasc,
          cep,
          email,
          password,
        });
      } else {
        responseApi = await createUserAdmin({
          name,
          tel,
          dtNasc,
          cep,
          email,
          password,
        });
      }
      if (responseApi.id) {
        navigate("/users");
      } else {
        console.log(responseApi);
      }
    } catch (error) {
      console.log(error);
      if (error.status === 403) {
        return toast.warn("Sem permissão.");
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
        <h2 className="title-cadastro">
          {!isUpdate ? "Criando" : "Alterando"} um usuário
        </h2>
      </div>

      <div className="cardcadastro">
        <form>
          <div className="row">
            <div className="input-container">
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="texto"
                id="nome"
                name="nome"
                placeholder="nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="tel">Telefone</label>
              <input
                type="numero"
                id="tel"
                name="tel"
                placeholder="(xx) xxxx-xxxx"
                required
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-container">
              <label htmlFor="data">Data de Nascimento</label>
              <input
                type="date"
                id="data"
                name="data"
                required
                value={dtNasc}
                onChange={(e) => setDtNasc(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="xxxxx-xxx"
                required
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="texto"
                id="email"
                name="email"
                placeholder="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
