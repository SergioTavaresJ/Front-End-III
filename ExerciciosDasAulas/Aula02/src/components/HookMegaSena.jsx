import React, { useState } from "react";

const HookMegaSena = () => {
  
  const [ultimoNumeroSorteado, setUltimoNumeroSorteado] = useState(null);

  
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  
  const sortearNumero = () => {
    
    const novoNumero = Math.floor(Math.random() * 60) + 1;

    
    if (numerosSorteados.length === 6) {
      
      alert("Já temos 6 números sorteados!");
      return;
    }

    if (numerosSorteados.includes(novoNumero)) {
      
      return;
    }

    
    setNumerosSorteados([...numerosSorteados, novoNumero]);

    
    setUltimoNumeroSorteado(novoNumero);
  };

  
  return (
    <div>
      <h1>Números sorteados:</h1>
      <ul>
        {numerosSorteados.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <p>Último número sorteado: {ultimoNumeroSorteado}</p>
      <button onClick={sortearNumero}>Sortear número</button>
    </div>
  );
};

export default HookMegaSena;