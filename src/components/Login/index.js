import React,{useState} from 'react'
import { app,db } from '../../FirebaseConfig'
//import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import { collection,
     addDoc,
     getDocs
    ,doc,
    updateDoc,
    deleteDoc
 } from "firebase/firestore"; 
 
const Login = () => {
     const collectionRef=collection(db,"users")
     
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
  addDoc(collectionRef,{
    email:data.email,
    password:data.password
  }).then(()=>{
    alert("Data added")
  }).catch((e)=>{
    console.log(e.message)
  })
}
 const getData=()=>{
  getDocs(collectionRef).then((res)=>{
    res.docs.map((each)=>console.log(each.data()))
  })
 }
 
 const updateData=()=>{
 const dataToUpdate=doc(db,"users","Mzilb6T2wY0KOpbfd3oC");
 updateDoc(dataToUpdate,{
    email:"abc",
    password:"1234565432"
 }).then(()=>{
    alert("updateDone")
 }).catch((e)=>{
    alert(e.message)
 })
 }
 const deleteData=()=>{
    const dataToUpdate=doc(db,"users","Mzilb6T2wY0KOpbfd3oC");
    deleteDoc(dataToUpdate,{
       email:"abc",
       password:"1234565432"
    }).then(()=>{
       alert("Delete Done")
    }).catch((e)=>{
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
             <button type="submit"  >Submit</button>
             <button type="button" onClick={getData}>getData</button>
             <button type="button" onClick={updateData}>Update</button>
             <button type="button" onClick={deleteData}>Delete</button>
              
            
            
             
        </form>
        </center>
    </div>
  )
}

export default Login