import './styles.css';

export default function CardCadastro() {
    return (
        <div class="cardcadastro">
            <h2>Faça seu cadastro!</h2>
            <form>
                <label for="nome">Nome Completo</label>
                <input type="texto" id="nome" name="nome" placeholder="Nome Completo" required />

                <label for="data">Data de nascimento (dd/mm/aaaa)</label>
                <input type="numero" id="data" name="data" placeholder="dd/mm/aaaa" required pattern="\d{2}/\d{2}/\d{4}" />

                <label for="tel">Telefone</label>
                <input type="numero" id="tel" name="tel" placeholder="Telefone" required />

                <label for="email">Email</label>
                <input type="texto" id="email" name="email" placeholder="Email" required />

                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Senha" required />

                <div>
                    <button type="submit">Enviar</button>
                    <button type="submit">Cancelar</button>
                </div>
            </form>
        </div>
    )

}