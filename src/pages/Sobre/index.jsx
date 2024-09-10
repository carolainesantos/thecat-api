import "./styles.css";

export default function Sobre() {
  return (
    <>
      <h1 className="title-sobre">Um pouquinho sobre nós</h1>
      <div className="flex-container">
        <div className="card-container">
          <div className="card-01">
            Somos apaixonados por gatos e criamos este espaço para compartilhar
            essa paixão com todos os amantes de felinos. Nosso objetivo é trazer
            informações divertidas, úteis e interessantes sobre o mundo dos
            gatos. Aqui, você encontrará curiosidades incríveis, fatos pouco
            conhecidos, dicas de cuidados, e as fotos mais adoráveis de gatos
            que você já viu!
          </div>
          <p className="detalhe">🤍🤍🤍</p>
        </div>

        <div className="card-container">
          <p className="detalhe-02">🤍🤍🤍</p>
          <div className="card-02">
            Nossa missão é criar um ambiente acolhedor e informativo, onde todos
            donos de gatos e aficionados por felinos de longa data, possam
            encontrar algo de valor. Sabemos que cada gato tem uma personalidade
            única e histórias que os tornam especiais. Por isso queremos
            celebrar a diversidade e beleza de cada gato, desde o mais
            brincalhão até o mais preguiçoso. Esperamos que este seja um espaço
            onde você possa aprender mais sobre esses companheiros peludos, ao
            mesmo tempo em que se diverte.
          </div>
        </div>

        <div className="card-container">
          <div className="card-03">
            Cada página deste site foi pensada para capturar a essência desses
            seres independentes e cheios de personalidade. Além disso, nosso
            site se atualiza constantemente com conteúdo novo, graças à
            integração com APIs especializadas, o que garante que você esteja
            sempre por dentro das novidades no universo dos gatos.
          </div>
          <p className="detalhe">🤍🤍🤍</p>
        </div>

        <div className="card-container">
          <p className="detalhe-04">🤍🤍🤍</p>
          <div className="card-04">
            Obrigado por nos visitar e esperamos que você goste tanto do site
            quanto nós gostamos de criá-lo!
          </div>
        </div>
      </div>
    </>
  );
}
