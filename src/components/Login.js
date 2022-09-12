import React, { useState } from "react";
import  "./Login.css";

 let Login=()=> {
    let adminLogIn=localStorage.getItem("admin");
   
    if(adminLogIn==="true" ){
        
        window.location.href='/home';
    }
    let [emailValue,setEmailValue]=useState("");
    let [passValue,setPassValue]=useState("");
    const signup=()=>{
        if(emailValue===undefined || emailValue==='' || emailValue===null){
            alert("Please Enter Email Value.");
        }
        else if(passValue===undefined || passValue==='' || passValue===null){
            alert("Please Enter password.");
        }else{
            if(emailValue==='admin@admin.com' || passValue ===123456){
                localStorage.setItem("admin",true);
                window.location.href="/home";
            }else{
                alert("Please enter valid details");
            }
        }
    } 
    let email =(e)=>{
        setEmailValue(e.target.value);
    }
    let pass =(e)=>{
        setPassValue(e.target.value);
    }
    return (
     
        
        <div className="container">
        <label htmlFor="Email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email"  required  onChange={(e)=>email(e)}/>
        <label htmlFor="Password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" onChange={(e)=>pass(e)} required />
        <button type="button" onClick={()=>signup()}>Login</button>
        
      </div>
      
    
    
    );
  }
  export default Login;
