import { Fichas } from "./componentes/Fichas";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Body from "./componentes/Body";
import Head from "./componentes/Head";
import FichaId from "./componentes/FichaId";
import Cadastrar from "./componentes/Cadastrar";


function App() {
  return (
    <div className="App">
      <Head />
      <BrowserRouter>
        <Routes>

          <Route path='/fichas' element={<Fichas />} />
          <Route path='/cadastro' element={<Cadastrar />} />
          <Route path='/:id' element={<FichaId />} />

          <Route path='/' element={<Body />} />
        </Routes>



      </BrowserRouter>
    </div>
  );
}

export default App;
