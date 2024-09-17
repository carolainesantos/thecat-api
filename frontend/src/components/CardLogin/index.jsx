import "./styles.css";

export default function CardLogin() {
  return (
    <div class="card-login">
      <div className="login-inicio">
        <h2 className="login-title">Login</h2>
        <span className="login-detalhe"></span>
      </div>

      <form>
        <div className="label-input">
          <label for="nome">Nome</label>
          <input
            type="texto"
            id="nome"
            name="nome"
            placeholder="Nome"
            required
          />

          <label for="email">Email</label>
          <input
            type="texto"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            required
          />
        </div>

        <div className="btn-entrar-logar">
          <button type="submit">ENTRAR</button>
        </div>
      </form>
    </div>
  );
}
