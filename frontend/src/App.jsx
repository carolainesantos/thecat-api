import "./App.css";
import { AuthProvider } from "./auth/Context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cadastro from "./pages/Cadastro";
import Inicial from "./pages/Inicial";
import Sobre from "./pages/Sobre";
import Felinos from "./pages/Felinos";
import Felino from "./pages/Felino";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Cat from "./pages/Cat";
import Profile from "./pages/Profile";
import ListUsers from "./pages/Users";
import User from "./pages/User";

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
    <AuthProvider>
      {currentPage !== "/login" && currentPage !== "/cadastro" ? (
        <Header />
      ) : null}
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route element={<PrivateRoute />}>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/felinos" element={<Felinos />} />
          <Route path="/felino" element={<Felino />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      {currentPage !== "/login" && currentPage !== "/cadastro" ? (
        <Footer />
      ) : null}
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: "50%" }}
      />
    </AuthProvider>
  );
}

export default App;
