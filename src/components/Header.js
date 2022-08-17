import styles from "./css/Header.module.css"
import logo192 from "../img/logo192.png"
import 'antd/dist/antd.css';
import React from 'react';

export function Header(){

// const [codigo, setCodigo] = useState();
// const [codigos, setCodigos] = useState([]);
// const [count, setCount] = useState(0);

// function salva(param){
//     setCodigo(param.target.value); //puxa os valores do input para o array 
// }


// function salva2(param){
//     param.preventDefault();

//     let temp_codigos = codigos
//     temp_codigos.push(codigo)

//     setCodigos(temp_codigos)
//     console.log(codigos);

//     document.getElementById("form").reset();

//     if (count <100){
//         setCount ((c) => c + 1);
//         console.log(count);
    
//     }
    
        
// }

    return(
        <>
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                <img className={styles.img} src={logo192} alt="not found"/>
                    <ul className={styles.navList}>
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Contato</button>
                        </li>
                        <li>
                            <button>Sobre</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        {/* <main> */}
            
            {/* <img className={styles.imagem} src={logo192}/> */}
            {/* <form onSubmit={salva2} id="form">
                <h1>T-T</h1>
                <input maxLength={13} onChange={salva} id="codigo" type="text" className={styles.input} />
                
            </form>
            <div className={styles.direita}>
                {codigos.map((codigo, index) => (
                    <div className={styles.borda}  key = {index}>
                        <p className={styles.p}>{codigo}</p>
                    </div>
                ))} */}
                    {/* key = {codigo.toString()} */}
            {/* </div>
        </main> */}
            {/* <div className={styles.center}> */}
                {/* <Carousel type="primary" autoplay>
                    <div>
                        <img src={relogio} className={styles.image} alt="not found" />
                    </div>
                    <div>
                        <img src={som} className={styles.image} alt="not found" />
                    </div>
                    <div>
                        <img src={mulher} className={styles.image} alt="not found" />
                    </div>
                </Carousel> */}
            {/* </div> */}
        </>
    )
}