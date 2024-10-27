import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/Context";

const PrivateRoute = () => {
  // pegar o token
  const { token } = useContext(AuthContext);

  // verificar se é nulo
  if (token === null) {
    return <Navigate to="/login" />;
  }
  //redirecionar
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
