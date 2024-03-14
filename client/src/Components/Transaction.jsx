import React from 'react' 
import { useEffect,useState } from 'react'

const Transaction = ({isEdit,setUpdate}) => {
    

    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState("");


    
    //TITLECHANGE
    const titlechange = (e) => {
      setTitle(e.target.value)
    }

    //AMOUNTCHANGE
    const amountchange = (e) => {
      setAmount(e.target.value)
    }

    const add = () => {
      fetch('http://localhost:8000/expensetracker-create',{
            method : 'POST',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
              category : title,
              amount: parseInt(amount),
              date : "12-3-2004"
            })
          }).then(response => response.json())
          .then(data => {
            setUpdate((prev) => !prev) 
            console.log(data)
          })
          
    }

    //BUTTON HANDLE
    const handle = (e) => {
      e.preventDefault();
      isEdit ? edititem() : add();
      
    }
    


    useEffect(()=>{
      setTitle(isEdit?.title || " ");
      setAmount(isEdit?.amount || 0)
    },[isEdit])

  return (
   <div className='flex justify-center'>
     <div className='flex flex-col gap-4 items-center w-[300px] h-[280px] rounded-lg shadow-lg font-title  p-2 bg-slate-200 mt-8'>
        <h1>{isEdit ? "Edit" : "Add new"} Transaction</h1>
            <div>
                <h1 className='mb-2'>Title</h1>
                <input type="text"  placeholder='Enter your expense'  onChange={titlechange} className='p-2 rounded-lg text-black'></input>
            </div>
            <div>
                <h1 className='mb-2'>Amount</h1>
                <input type="number"  placeholder='Enter amount'  onChange={amountchange} className='p-2 rounded-lg text-black'></input>
            </div>
            <div>
                <button onClick={handle} className='bg-yellow-400 p-2 rounded-lg'>{isEdit ? "Save" : "Add"} expense</button>
            </div>
        </div>
   </div>
  )
  }


export default Transaction