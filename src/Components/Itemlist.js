const Itemlist=(props)=>{
    return (
        <>
        <li>{props.item}
        <button onClick={e=>{props.filtereddata(props.index)}}>Remove</button>
        </li>
        
        </>
    )
}


export default Itemlist;