import React from 'react'

const AcceptTask = ({data}) => {
   if (!data) {
    return (
      <div className="p-5 bg-gray-300 rounded-xl w-[320px] text-center">
        <p>No Task Found</p>
      </div>
    );
  }
  console.log(data);
  
  return (
     <div  className=' flex-shrink-0 p-5 h-full w-[320px] bg-red-400 rounded-xl '>
        <div className=' flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-4 py-1 rounded'>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm  mt-3'>
          {data.description}
        </p>
        <div className='flex justify-between mt-4 ' >
            <button className='bg-green-500 py-1 px-2 text-sm '>Mark as Completed </button>
            <button className='bg-red-500 py-1 px-2 text-sm '>Mark as Failed </button>
        </div>
      </div>
  )
}
export default AcceptTask