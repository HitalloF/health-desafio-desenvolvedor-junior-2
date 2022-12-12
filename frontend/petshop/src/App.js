import { Fichas } from "./componentes/Fichas";
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom"; 
import Body from "./componentes/Body";
import Head from "./componentes/Head";

function App() {
  return (
    <div className="App">
      <Head />
     <BrowserRouter>
      <Routes>

      <Route path='/fichas' element={<Fichas/>} /> 
      <Route path ='/' element={<Body/>}/>
     </Routes>


    <Fichas/>
    </BrowserRouter>
    </div>
  );
}

export default App;
