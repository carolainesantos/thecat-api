import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import { useState } from "react";
import Header from "./components/Header";
import Sobre from "./pages/Sobre";
import Inicial from "./pages/Inicial";
import Footer from "./components/Footer";
import { useEffect } from "react";
// import TheCatApi from "./pages/TheCatApi";

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentPage = location.pathname;
    if (currentPage === "/") {
      document.getElementById("root").classList.add("cat-image");
    } else {
      document.getElementById("root").classList.remove("cat-image");
    }
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
