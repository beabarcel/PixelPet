import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Animais from "./pages/Animais";
import Cadastro from "./pages/Cadastro";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:user" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

//através do :user a gente consegue acessar a url de user
