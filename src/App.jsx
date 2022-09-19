import {useState,useEffect} from "react";
import Formulario from "./components/Formularios";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes,setPacientes] = useState([]);

  const [paciente,setPaciente] = useState({});

  useEffect(()=>{
    const obtenerLS = () => {
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        if(pacientesLS.length){
          setPacientes(pacientesLS);
        }
    }
    obtenerLS();
 
  },[]);

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    console.log("Componente Listo o cambio paciente");
  },[pacientes]);

  const eliminarPaciente = id=>{
    let pacientesActualizados= pacientes.filter((data)=> data.id!==id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes} 
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
