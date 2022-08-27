import './css/Main.scss'
import React, { useState } from 'react';

export function Main(){

const [codigo, setCodigo] = useState();
const [codigos, setCodigos] = useState([]);
const [count, setCount] = useState(0);



function salva(param){
    setCodigo(param.target.value);
}


function salva2(param){
    param.preventDefault();

    let temp_codigos = codigos
    temp_codigos.push(codigo)

    setCodigos(temp_codigos)
    console.log(codigos);

    document.getElementById("form").reset();
// Nunca apagar esse contador, senão buga o bip.
    if (count <100){
        setCount ((c) => c + 1);
    
    }
    
        
}
    return(
        <>
        <main>
            
            <form onSubmit={salva2} className='form' id='form'>
              <h1 className='title'>T-T</h1>  
                <input maxLength={13} onChange={salva} id="codigo" type="text"/>
                
            </form>
            <div className='direita'>
                {codigos.map((codigo, index) => (
                    <div className='borda'  key = {index}>
                        <p className='p'>{codigo}</p>
                    </div>
                ))}
                    {/* key = {codigo.toString()} */}
            </div>
        </main>
        </>
    )
}