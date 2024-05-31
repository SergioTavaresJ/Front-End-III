import React from 'react'
import { useState } from 'react'

const FormularioDeContato = () => {

    const [nome, setNome] = useState()
    const [contato, setContato] = useState()
    const [mensagem, setMensagem] = useState()

    const handleName = (e) => {
        setNome(e.target.value)
    }

    const handleContato = (e) => {
        setContato(e.target.contato)
    }

    const handleMensagem = (e) => {
        setMensagem(e.target.mensagem)
    }

 return (
    <div>
        <form>
            <div>
                <label>
                    Nome:
                    <input type="text" name="nome"/>
                </label>
                <br/>
                </div>
                <div>
                    <label>
                        Contato:
                        <input type="number" name="numero"/>
                        </label>
                        <br/>
                        </div>
                        <div>
                            <label>
                                Mensagem:
                                <input type="text" name="mensagem"/>
                            </label>
                            <br/>
                            </div>
                            </form>
    </div>
  )
}

export default FormularioDeContato