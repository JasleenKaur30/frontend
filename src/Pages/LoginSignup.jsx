import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state,setState]=useState("Login");
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value}) //to update the userfield
  }

  const login=async(req,res)=>{
  console.log("Login Function Executed",formData)
  let responseData;
  await fetch('http://localhost:5000/login',{
    method:'POST',
    headers:{
      Accept:'application/form-data', //what type of data expecting in response
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token); //auth-token - key under token is stored
    window.location.replace('/');
    //to chck auth go to application>local storage >http
  }
  else{
    alert(responseData.errors)
  }

  }

  const signup=async(req,res)=>{
    console.log("signup Function Executed",formData)
    let responseData;
    await fetch('http://localhost:5000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
      //to chck auth go to application>local storage >http
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Sign Up"?<input  name="username" value={formData.username} onChange={changeHandler} type="text"  placeholder='Your Name'/>:<></>} 
          <input  name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Email Id' />
          <input  name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">Already have an Account? <span onClick={()=>{setState("Login")}}>Login here</span></p>: <p className="loginsignup-login">Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
       
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing ,I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup