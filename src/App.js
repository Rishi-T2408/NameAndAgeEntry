import {useState} from 'react'
import './App.css'
function App() {
  const[Name,setName]=useState("");
  const[Age,setAge]=useState("");
  const[data,setData]=useState([]);
  
  const ClickHandler=()=>{
    let Data=[...data]
    Data.push({
      id:Math.random(),
      Name:Name,
      Age:Age
    })
    setData(Data)
  }
  const DeleteHandler=(id)=>setData(data.filter((prevdata)=>prevdata.id!==id))


  return (
    <div className="App">
      <div className='App-container'>
         <input type="text" placeholder="Enter Name" value={Name} onChange={(e)=>setName(e.target.value)}/>
         <input type="number" placeholder="Enter Age" value={Age} onChange={(e)=>setAge(e.target.value)}/>
         <button onClick={ClickHandler}>Add</button>
         
       </div>
       <div>
       {data && <table>
        <tr>
          <th>Name</th>
          <th colSpan={2}>Age</th>
          <th>Delete</th>
        </tr>
        {data.map((d)=>{
          return(
          <tr key={d.id}>
            <td>{d.Name}</td>
            <td colSpan={2}>{d.Age}</td>
            <td><button onClick={()=>DeleteHandler(d.id)} className='button'>Delete</button></td>
          </tr>
          )
        })}
        
     </table>}
       </div>
    </div>
  );
}

export default App;
