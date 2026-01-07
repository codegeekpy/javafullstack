import React, { useState } from "react";
import axios from "axios";

function App(){

const [data,setData]=useState({
  username:"",
  email:"",
  password:""
}); //e -> event object 
  const changeData = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    });

  };
  const submitData =()=>{
    const res = axios.post("http://localhost:8080",data)
  }
//endpoints
return (<>

<h1>Hi,{data.username}</h1>
<input type="text" placeholder="Enter your name" name="username" onChange={changeData}/>
<input type = "text" placeholder="Enter your email" name="email" onChange={changeData}/>
<input type = "password" placeholder="Enter your password" name="password" onChange={changeData}/>
</>);

}
export default App;