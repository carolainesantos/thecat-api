import './styles.css';

export default function CardCadastro() {
    return (
        <div class="cardcadastro">
            <form>
                <div className='div-label-input'>
                    <label for="nome">Nome Completo</label>
                    <input type="texto" id="nome" name="nome" placeholder="nome" required />

                    <label for="data">Data de nascimento</label>
                    <input type="numero" id="data" name="data" placeholder="dd/mm/aaaa" required pattern="\d{2}/\d{2}/\d{4}" />

                    <label for="tel">Telefone</label>
                    <input type="numero" id="tel" name="tel" placeholder="(xx) xxxx-xxxx" required />

                    <label for="email">Email</label>
                    <input type="texto" id="email" name="email" placeholder="email" required />

                    <label for="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="senha" required />
                </div>

                <div className="btn">
                    <button type="submit" className='btn-enviar'>Enviar</button>
                    <button type="submit" className='btn-cancelar'>Cancelar</button>
                </div>
            </form>
        </div>
    )

}