import {useState} from 'react';
import "./todo.css"
import {Headingh1,Paragraph,Button} from 'button.js'
function App() {
  // const [inpvalue,setinputvalue] = useState('')
  // const [list,setList] = useState([])
  const [inpvalue,setinputvalue] = useState('')
  const [list,setlist] = useState([])
  
  
  const addItem = ()=>{
    if(inpvalue == ""){
      alert("hello ahmed")
    }else{
      setList([...list,inpvalue])
      setinputvalue('')
    }
  
  }
  const deleteitems = ()=>{

    setList([])
  
  
  }
  const handleDelete = (ind,e) =>{
    // e.target.parentNode.remove()
    // setList(
    //   list.filter((elem,index)=>{
    //     return index !== ind
    //   })
    // )
    list.splice(ind,1)
    setList([...list])
  }
  const handleEdit = (ind)=>{
    
    let myinp = prompt('enter the value to update')
    list[ind]= myinp
    setList([...list])
  }
  const handleDeleteAll = () =>{
    setList([])
  }

   
  const styles = {
    button:{
      backgroundColor:'red',
 
      
    }
    
  
    
  }

  return (
    <div className="App">
      <h1>Todoapp</h1>
      <input type="text" value={inpvalue} onChange={(e)=>setinputvalue( e.target.value)} name="" id="" />
      <button onClick={addItem} style={styles.button}>Add</button>
      <button class="ali" onClick={handleDeleteAll}>Delete</button>
      {
        list.map((val,ind)=>{
          return <p key={ind} >{val} <button onClick={(e)=>handleDelete(ind,e)} >delete</button><button onClick={()=>handleEdit(ind)} >edit</button> </p>
        })
      }
      {/* <Headingh1 className='ali'/>
      <Paragraph className='h'/>
      <Button className='f'/> */}
      
      
      
      
    </div>
  );
}

export default App;
