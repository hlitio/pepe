import React, {useState, useEffect} from "react";
import "./style.css";

export default function App() {
  const [calle, setCalle] = useState();
  const [altura,setAltura] = useState();

  return (
    <>
      <div className="contenedor">
        <div className= "cabecera">

          <label>Ingrese Dirección: </label>
          <input placeholder="ingrese Calle.." type="text" onChange={event=>setCalle(event.target.value)} />
          
          <label>Ingrese Altura: </label>
          <input placeholder="ingrese Altura.." type="text" onChange={event=>setAltura(event.target.value)} />

          <button>Aceptar</button>

        </div>
      </div>
    </>
   
  );
}
