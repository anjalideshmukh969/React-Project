import React, {useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = ({}) => {

  // const [username, setUsername] = useState('');
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggenInUser','' )
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white font-medium'>Hello <br /> <span className=' font-semiboldtext-3xl'>username</span> </h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header