import React from 'react'
import Exercicio1Adicao from './components/Exercicio1Adicao'
import Exercicio1Subtracao from './components/Exercicio1Subtracao'
import Exercicio1Multiplicacao from './components/Exercicio1Multiplicacao'
import Exercicio1Divisao from './components/Exercicio1Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <PrecisoEstudar nomeDaTecnologia= {"React"}/>
      <Exercicio1Adicao num1={2} num2={3}/>
      <Exercicio1Subtracao num1={30} num2={5}/>
      <Exercicio1Multiplicacao num1={5} num2={15}/>
      <Exercicio1Divisao num1={10} num2={2} />
      
      
    </div>
  )
}

export default App