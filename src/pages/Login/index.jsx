import "./styles.css";

<head>
    <title>Bem-vindo novamente</title>
</head>

export default function Login() {
    return (
        <div class="card-login">
            <h2>Login</h2>
            <form>
                <label for="nome">Nome</label>
                <input type="texto" id="nome" name="nome" placeholder="Nome" required />

                <label for="email">Email</label>
                <input type="texto" id="email" name="email" placeholder="Email" required />

                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Senha" required />

                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

// alert("CONTEUDO DA MENSAGEM... + com sucesso!");