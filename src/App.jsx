import React, { useContext, useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Auth/Login';
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { set } from 'react-hook-form';
import { AuthContext } from './context/AuthProvider';

const App = () => {
 
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  // console.log("Auth context data in App.jsx:",authData.employees);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(loggedInUser.role);
        setloggedInUserData(userData.data)
      }
     
  }, [])

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password ==  '123' ){
      setUser('admin')
      // console.log(user,"admin logged in");
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}));

    }else if (authData ){ 
      const employee = authData.employees.find((e)=>email == e.email && e.password == password);
     if(employee){
      setUser('employee')
      setloggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
     }
     // console.log(user,"employee logged in");
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee}));

    }else{
      alert("Invalid credentials")
    } 
  }
  // it is used to get the auth context data
  const data = useContext(AuthContext);
  // console.log("Auth context data in App.jsx:",data);
 
  return (
    <>
   {!user ? <Login handleLogin={handleLogin} /> : ''}
   {user == 'admin' ?  <Admin /> :  (user == "employee" ? <Employee data={loggedInUserData} /> : null) }
    </>
  )
}

export default App