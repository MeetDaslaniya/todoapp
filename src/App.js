import { useState } from 'react';
import './App.css';
import Additem from './Components/Additem';
import Itemlist from './Components/Itemlist';

function App() {
  const [todolist,setTodolist]=useState([])

  let newlist=(inputtext)=>{
    if(inputtext!="")
    setTodolist([...todolist,inputtext])
  }

  const filtereddata=(id)=>{
    let newlisttodo=[...todolist]
    newlisttodo.splice(id,1)
    setTodolist([...newlisttodo])
  }
  

  return (
    <>
    <h1>App</h1>
    <Additem newlist={newlist}/>
    {todolist.map((item,i)=>{
      return(
        <Itemlist key={i} index={i} item={item} filtereddata={filtereddata}/>
      )
    })}
    </>
  );
}

export default App;
