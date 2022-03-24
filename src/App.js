import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Modify from "./pages/Modify";
import Delete from "./pages/Delete";

import {createContext} from 'react'


const initial = [
  {
      matricula: '1',
      nome: 'Matheus',
      cpf: '12345678901',
      avaliacao: 10 
  },

  {
      matricula: '2',
      nome: 'Meredith',
      cpf: '12345678902',
      avaliacao: 5
  },
  {
      matricula: '3',
      nome: 'Macaule',
      cpf: '12345678903',
      avaliacao: 10
  },
  {
      matricula: '4',
      nome: 'Natalia',
      cpf: '12345678904',
      avaliacao: 7
  },
  {
      matricula: '5',
      nome: 'Thiago',
      cpf: '12345678905',
      avaliacao: 8
  }
]


export const AlunoContext = createContext({
  alunos: [],
  setAlunos: () => {},
  id: undefined,
  setId: () =>{}
});

function App() {
  const [alunos, setAlunos] = useState(initial);
  const [id, setId] = useState(null);
  const value = useMemo(() => ({ alunos, setAlunos, id, setId }), [alunos, id]);


  return (
    <AlunoContext.Provider value={value}>
      <div >
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path= "/registrar" element = {<Register/>} />
            <Route path= "/alterar" element = {<Modify/>} />
            <Route path = "/deletar" element = {<Delete/>} />
          </Routes>
        </Router>  
      </div>
    </AlunoContext.Provider>  
  );
}

export default App;
