Auth Email:

import React,{useState} from 'react'
import { app } from '../../FirebaseConfig'
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
 
const Login = () => {
    let auth=getAuth()
     
    const [data,setData]=useState({
         
        email:'',
        password:'',
         
    })
    const{ email,password,}=data
const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
     
}
 
const submitHandler=(e)=>{
e.preventDefault()
createUserWithEmailAndPassword(auth,data.email,data.password).then(
    (res)=>{
        console.log(res.user)
    }
).catch((e)=>{
 alert(e.message)
})
}
const buttonLogin=()=>{
    signInWithEmailAndPassword(auth,data.email,data.password).then(
        (res)=>{
            console.log(res.user)
        }
    ).catch((e)=>{
     alert(e.message)
    })
}
 
 
  return (
    <div>
        <center> 
        <form onSubmit={submitHandler}>
            <h3>Login Form</h3>
             
            <input type="email" name="email" placeholder='User email'
             value={email} onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='password'
             value={password} onChange={changeHandler}/><br/>
             <button type="submit">resister</button>
             <button type='button' onClick={buttonLogin}>Login</button>
            
            
             
        </form>
        </center>
    </div>
  )
}

export default Login
--------------------------------------------------------------------------------------
Google_auth:

import React,{useState} from 'react'
import { app } from '../../FirebaseConfig'
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
 
const Login = () => {
    let auth=getAuth()
    const googleProvider=new GoogleAuthProvider()
     
    const [data,setData]=useState({
         
        email:'',
        password:'',
         
    })
    const{ email,password,}=data
const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
     
}
 
const submitHandler=(e)=>{
e.preventDefault()
signInWithPopup(auth,googleProvider).then(
    (res)=>{
        console.log(res.user)
    }
).catch((e)=>{
 alert(e.message)
})
}
const buttonLogin=()=>{
    signInWithEmailAndPassword(auth,googleProvider).then(
        (res)=>{
            console.log(res.user)
        }
    ).catch((e)=>{
     alert(e.message)
    })
}
 
 
  return (
    <div>
        <center> 
        <form onSubmit={submitHandler}>
            <h3>Login Form</h3>
             
            <input type="email" name="email" placeholder='User email'
             value={email} onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='password'
             value={password} onChange={changeHandler}/><br/>
             <button type="submit">resister</button>
             <button type='button' onClick={buttonLogin}>Login</button>
            
            
             
        </form>
        </center>
    </div>
  )
}

export default Login