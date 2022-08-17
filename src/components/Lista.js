import Item from './Item'

function Lista (){
    // fragment
    return(
<>
<ul>
    <Item marca="Ferrari" ano_lancamento={1900} />
    <Item marca="Fiat" ano_lancamento={1800}/>
    <Item marca="Lamborghine" />
</ul>
</>
    )
}

export default Lista