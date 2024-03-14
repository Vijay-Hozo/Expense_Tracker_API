import React, { useEffect,useState } from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Transaction from './Components/Transaction'
import Card from './Components/Card'

const App = () => {
 
 
let totalincome = 0;
let totalexpense = 0;

const [list,setList] = useState([]);
const [edit,setEdit] = useState();
const [update,setUpdate] = useState(false);

  list.forEach((item)=> {
    if(item.amount > 0){
      totalincome += item.amount;
    }else{
      totalexpense += item.amount;
    }
  })

  //delete
 
//   const deleteitem = (id) => {
//     console.log(id);
//     const res = list.filter((item) =>{
//        return item.id !== id;
//   })
//   setList([...res]);
// }
  
  //GET
  useEffect(()=>{
    fetch('http://localhost:8000/expensetracker-get')
    .then(response => response.json())
    .then(data => {
      setList(data);
    })
  },[update])


  return (
    <div>
      <Navbar />

      <Body income={totalincome} expense={totalexpense}/>

      <Transaction
        isEdit={edit}
        setUpdate={setUpdate}
      />

      {list.map((expense) => (
        <Card keys={expense.id} 
        id={expense._id}
        title={expense.category}
         amount={expense.amount}
         setUpdate={setUpdate}
         setEdit={setEdit}/>
      ))
      }
    </div>
  )
}

export default App