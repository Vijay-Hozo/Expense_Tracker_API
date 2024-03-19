
import MaterialIcon from 'material-icons-react';

const Card = (props) => {
  const{title,amount,id ,setUpdate} = props;

  const Delete = () => {
    console.log(id);
    deleteitem(id);
  }

  const Edit = () => {
    console.log(id)
    edititem(id)
  }


//DELETE
   const deleteitem = (id) => {
     fetch(`https://task-manager-1imi.onrender.com/expensetracker-delete/${id}`,{
       method : 'DELETE',
       })
       .then(response => response.json())
     .then(data => {
      setUpdate((prev) => !prev);
      console.log(data)})
 }

//EDIT
 const edititem = (id) => {
  try{
    fetch(`https://task-manager-1imi.onrender.com/expensetracker-update/${id}`,{
    method : 'PATCH',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      amount : parseInt(amount),
      category : title,
      date : "12-3-2004"
    })
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    setUpdate((prev) => !prev) 
    console.log(data)
  })
  }catch(error){
    console.log(error)
  }[setUpdate]
}


  return (
   <div className='flex justify-center mt-4'>
    <div className={`flex justify-between m-3 rounded-lg w-[300px] h-[70px] border-4 ${amount > 0 ? 'border-r-green-600' : 'border-r-red-600'}`}>
    <div>
        <h1 className='text-2xl font-title text-black p-4'>{title}</h1>
    </div>
    <div>
        <h1 className='text-2xl font-title text-black p-4'>{amount}</h1>
    </div>
    
   </div>
   <div className='flex justify-center items-center gap-4'>
      <button onClick={Delete} ><MaterialIcon icon="delete" /></button>
      <button onClick={Edit}><MaterialIcon icon="edit" /></button>

    </div>
   </div>
  )
}

export default Card