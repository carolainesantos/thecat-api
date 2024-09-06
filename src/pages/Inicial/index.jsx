import "./styles.css";

export default function Inicial() {
  return (
    <div className="container">
      <div className="NavBar">
        <div className="logo-nav">
          <img
            className="logo-img"
            src="../../assets/img/logo.svg"
            alt="Logo"
          />

          <div>
            <a href="Api">Api</a>
          </div>
        </div>
      </div>

      <h1>
        Bem-vindos à <br /> Sênior<strong className="strongHome">.</strong>{" "}
        Bigodes!
      </h1>

      <p>
        Saiba tudo sobre o mundo felino e leve a vida mais rom-rom!
        <br /> Aqui você verá dicas, curiosidades sobre gatos.
      </p>
    </div>
  );
}
