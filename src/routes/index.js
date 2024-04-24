import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Inicial } from "../pages/Inicial";
import { Logado } from "../pages/Logado";
import { PrivateRoute } from "./privateRoute";


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logado" element={<PrivateRoute> <Logado /> </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/inicial" element={<Inicial />} />
      </Routes>
    </BrowserRouter>
    
  )
}

   

