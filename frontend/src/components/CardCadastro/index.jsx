import "./styles.css";

export default function CardCadastro() {
  return (
    <div className="cardcadastro">
      <form>
        {/* Primeira linha: Nome Completo e Telefone */}
        <div className="row">
          <div className="input-container">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="texto"
              id="nome"
              name="nome"
              placeholder="nome"
              required
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
            />
          </div>
        </div>

        {/* Segunda linha: Data de Nascimento e CEP */}
        <div className="row">
          <div className="input-container">
            <label htmlFor="data">Data de Nascimento</label>
            <input type="date" id="data" name="data" required />
          </div>

          <div className="input-container">
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              placeholder="xxxxx-xxx"
              required
            />
          </div>
        </div>

        {/* Terceira linha: Email e Senha */}
        <div className="row">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="texto"
              id="email"
              name="email"
              placeholder="email"
              required
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
            />
          </div>
        </div>

        {/* Botões */}
        <div className="btn">
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
          <button type="button" className="btn-cancelar">
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
