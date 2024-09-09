import CatCard from "../../components/Card/CardFelinos";
import "./styles.css";

export default function Felinos() {
  return (
    <div id="felinos-page">
      <h1 className="Title">Encante-se com os felinos mais fofos!</h1>
      <div id="felinos-conteudo">Role a página para ver nossos felinos</div>
      <div id="cat-cards-container">
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
      </div>
    </div>
  );
}
