import React from 'react'
import Campanha from './components/Campanha'
import FormularioDeContato from './components/FormularioDeContato'
import {useState} from 'react'


const handleSubmit = (e) => {
  e.preventDefault()
  console.log("O seguinte JSON será enviado via HTTP POST para o back-end:")
  console.log('Nome: ${nome} Contato: ${contato} Mensagem: ${mensagem}')


  return (
    <div>
      <h1>FormularioDeContato</h1>
      <form onSubmit={handleSubmit}/>
    </div>
  )
}

export default App