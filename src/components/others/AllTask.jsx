import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const {authData} = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto'>
                <div className=' flex justify-between  rounded bg-red-400 mb-2 px-4 py-2'>
                    <h2 className='bg-red-300 w-1/5'>Employee Name</h2>
                    <h3 className='bg-red-300 w-1/5'>New Task</h3>
                    <h5 className='bg-red-300 w-1/5'>Active Task</h5>
                    <h5 className='bg-red-300 w-1/5'>Completed</h5>
                    <h5 className='bg-red-300 w-1/5'>Failed</h5>
                </div>
            {authData.employees.map(function (elem) {
                return <div className=' flex justify-between  rounded bg-red-400 mb-2 px-4 py-2'>
                    <h2 className='bg-red-300 w-1/5'>{elem.firstname}</h2>
                    <h3 className='bg-red-300 w-1/5'>Task</h3>
                    <h5 className='bg-red-300 w-1/5'>Status</h5>
                    <h5 className='bg-red-300 w-1/5'>Status</h5>
                </div>
            })}
        </div>
    )
}
export default AllTask