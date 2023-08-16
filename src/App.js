import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  
  const [colaboradores, actualizarColaboradores] = useState ([
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor",
      fav: true
    },

    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor",
      fav: false
    },

    {
      id: uuid(),
      equipo:"UX y Diseño",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor",
      fav: false
    },

    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorSecundario: "#D9F7E9",
      colorPrimario: "#57C278 "
    },
  
    {
      id: uuid(),
      titulo: "Front End",
      colorSecundario: "#E8F8FF",
      colorPrimario: "#82CFFA"
    },
  
    {
      id: uuid(),
      titulo: "Data Science",
      colorSecundario: "#F0F8E2",
      colorPrimario: "#A6D157"
    },
    
    {
      id: uuid(),
      titulo: "Devops",
      colorSecundario: "#FDE7E8",
      colorPrimario: "#E06B69"
    },
    
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorSecundario: "#FAE9F5",
      colorPrimario: "#DB6EBF"
    },
    
    {
      id: uuid(),
      titulo: "Móvil",
      colorSecundario: "#FFF5D9",
      colorPrimario: "#FFBA05"
    },
    
    {
      id: uuid(),
      titulo: "Inovación y Gestión",
      colorSecundario: "#FFEEDF",
      colorPrimario: "#FF8A29"
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }

      <Footer/>


    </div>
  );
}

export default App;
