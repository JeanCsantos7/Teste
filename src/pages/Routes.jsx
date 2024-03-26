import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Contato from "./Contato";
import Unidades from "./Unidades";
import Home from "./Home";
import ConteudoUnidades from "../components/ConteudoUnidades";

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Unidades" element={<Unidades />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Menu" element={<Menu />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
