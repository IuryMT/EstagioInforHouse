import { useState } from 'react'

function Form(){

    function cadastrarUsuario(e){
e.preventDefault()
console.log(name, Email)
    }

    const [name, setName] = useState() // Vai ser usado para trabalhar com backend
    const [Email, setEmail] = useState() // **
    return(
        <div>
            <h1>Insira seus dados</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                <input 
                    type="text" 
                    id="nome" 
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label> 
                    <input 
                        type="email" 
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <input type="submit" id="email" value="Cadastrar"/>
            </form>
        </div>
    )
}

export default Form