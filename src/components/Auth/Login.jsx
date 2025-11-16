import React, { useState } from 'react'


const Login = ({handleLogin}) => {
//  console.log(handleLogin);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler= (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log("email is ",email,"password is",password);
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center '>
                <input 
                value={email}
                onChange={(e)=>{ setEmail(e.target.value)
                }} required className='border-2 border-emerald-600 py-3 px-6 text-lg font-medium text-white outline-none bg-transparent rounded-full placeholder:text-gray-400' type="email" placeholder='Enter email' />

                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='mt-4 border-2 border-emerald-600 py-3 px-6 text-lg font-medium text-white outline-none bg-transparent rounded-full placeholder:text-gray-400'  type="password" placeholder='password'/>
              
                <button  className=' mt-7 w-full border-none hover:bg-emerald-700 bg-emerald-600 font-semibold py-2 px-8 text-lg text-white outline-none rounded-full' >Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login