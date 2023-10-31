import "./App.css";
import logo from "./img/cronometro.svg";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";
function App() {
  const [numero, setNumero] = useState(0);

  const manejarClick = () => {
    setNumero(numero + 1);
  };

  const reiniciarContador = () => {
    setNumero(0);
  };
  return (
    <div className="App">
      <div className="cronometro-logo-contenedor">
        <img className="cronometro-logo" src={logo} />
      </div>
      <div className="contenedor-principal">
        <Contador numero={numero} />
        <Boton texto="Click" botonClick={true} manejarClick={manejarClick} />
        <Boton
          texto="Reiniciar"
          botonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
