import React from 'react'

const FailedTask = () => {
  return (
    <div  className=' flex-shrink-0 p-5 h-full w-[320px] bg-yellow-400 rounded-xl '>
        <div className=' flex justify-between items-center'>
          <h3 className='bg-red-500 text-sm px-4 py-1 rounded'>High</h3>
          <h4 className='text-sm'>20 feb 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Learn React.js</h2>
        <p className='text-sm  mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo autem ullam quos nostrum, ipsum ipsa.
        </p>
        <div className='mt-2'>
          <button className='w-full'>Failed</button>
        </div>
      </div>

  )
}

export default FailedTask
