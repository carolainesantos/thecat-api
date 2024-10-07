import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Inicial from "./pages/Inicial";
import Sobre from "./pages/Sobre";
import Felinos from "./pages/Felinos";
import Felino from "./pages/Felino";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() => {
    const currentPage = location.pathname;
    if (currentPage === "/") {
      document.getElementById("root").classList.add("cat-inicio");
    } else {
      document.getElementById("root").classList.remove("cat-inicio");
    }
  });

  return (
    <>
      {currentPage !== "/login" && currentPage !== "/cadastro" ? (
        <Header />
      ) : null}
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/felinos" element={<Felinos />} />
        <Route path="/felino" element={<Felino />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      {currentPage !== "/login" && currentPage !== "/cadastro" ? (
        <Footer />
      ) : null}
    </>
  );
}

export default App;
