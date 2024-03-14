import React from 'react'


const Body = (props) => {
  return (
   <div>
     <div className='flex justify-center '>
        <h1 className='text-slate-800 font-semibold text-2xl py-10 font-title'>Earn Money || Save Money</h1>
    </div>
    <div className='flex justify-center'>
    <div className='flex justify-around items-center p-8 font-title font-medium bg-slate-200 h-24 w-72 rounded-lg shadow-lg'>
        <div className='flex flex-col gap-4'>
            <p>Income</p>
            <p className='text-green-800 font-semibold'>{props.income}</p>
        </div>
        <div className='flex flex-col gap-4' >
            <p>Expense</p>
            <p className='text-red-800 font-semibold'>{props.expense}</p>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Body