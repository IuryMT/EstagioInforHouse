import Button from './evento/Button'

function Evento(){

function meuEvento(){
    console.log('Ativado')
}



    return(
<>
<p>Clique para disparar o evento</p>
<button onClick={meuEvento}>Clique-me!</button>
<Button event={meuEvento} text="primeiro evento"/>
</>
    )
}

export default Evento