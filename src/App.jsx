import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useState } from 'react'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  useEffect(() => {
  if(authData){
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
      setUser(loggedInUser.role);
    }
  }
  }, [authData])
  const handleLogin =(email,password)=>{
    if(email == 'admin@me.com' && password == 123){
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    }else if(authData){
      const employee = authData.employees.find((e)=>e.email === email && e.password === password);
      if(employee){
        setUser("employees");
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
      }
    }else{
      alert("Invalid Credentials")
    }
  }


  
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} />:''}
      {user === "admin" && <AdminDashboard />}
      {user === "employees" && <EmployeeDashboard data={loggedInUserData}/>}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
