import React from 'react'
import Aluno from './components/Aluno'
import {Alunos} from './components/Alunos'

const App = () => {
  return (
    <div>
      <h1>Informações dos Alunos</h1>
      {Alunos.map((Alunos) =>
      <h2> <Aluno nome = {Alunos.nome} curso ={Alunos.curso} email = {Alunos.email} media={Alunos.media} /></h2>
)}
    </div>
  )
}

export default App