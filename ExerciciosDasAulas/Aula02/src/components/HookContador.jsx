import React, { useState } from 'react'

const HookContador = () => {
    
    const [contador ,setcontador] = useState(1) 

    function IncrementarContador (){
        setcontador(contador +1);

    }     

    


  return (
    <div>
        <h1>Contador: {contador}</h1>
        <button onClick={IncrementarContador}>
            
        </button>
    </div>
  )
}

export default HookContador