import styles from './css/Main.module.css'
// import logo192 from "../img/logo192.png"
// import relogio from "../img/relogio.png";
// import som from "../img/som.png";
// import mulher from "../img/mulher.png";
import React, { useState } from 'react';
// import { Carousel } from 'antd';
import 'antd/dist/antd.css';

export function Main(){

const [codigo, setCodigo] = useState();
const [codigos, setCodigos] = useState([]);
const [count, setCount] = useState(0);

function salva(param){
    setCodigo(param.target.value); //puxa os valores do input para o array 
}


function salva2(param){
    param.preventDefault();

    let temp_codigos = codigos
    temp_codigos.push(codigo)

    setCodigos(temp_codigos)
    console.log(codigos);

    document.getElementById("form").reset();

    if (count <100){
        setCount ((c) => c + 1);
        console.log(count);
    
    }
    
        
}
    return(
        <>
        <main>
            
            {/* <img className={styles.imagem} src={logo192}/> */}
            <form onSubmit={salva2} id="form">
                <h1>T-T</h1>
                <input maxLength={13} onChange={salva} id="codigo" type="text" className={styles.input} />
                
            </form>
            <div className={styles.direita}>
                {codigos.map((codigo, index) => (
                    <div className={styles.borda}  key = {index}>
                        <p className={styles.p}>{codigo}</p>
                    </div>
                ))}
                    {/* key = {codigo.toString()} */}
            </div>
        </main>
        </>
    )
}