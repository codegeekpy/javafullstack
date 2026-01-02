import axios from "axios";
import { useState } from "react";
// conce
function App(){
  const [Data,setData] = useState({
    uname:"",
    email:"",
    psw:""
  });
  const changeData=(e)=>{
    setData({...Data,[e.target.name]:e.target.value});
    //...Data is used to spread the existing data and then we are updating the specific field using [e.target.name] which is dynamic key assignment in object
  };
  const SubmitData=()=>{
    axios.post("http://localhost:8080/register",Data);
  }
  return(<>
  <h1>Form Handling using single state object</h1>
  <p>My name is {Data.uname}</p>
  <p>My mail is {Data.email}</p>
  <p>My password is {Data.psw}</p>
  <input name="uname" placeholder="Enter your name"  onChange={changeData}/><br></br>
  <input name="email" placeholder="Enter your mail"  onChange={changeData}/><br></br>
  <input name="psw" placeholder="Enter your password"  onChange={changeData}/><br></br>
  <button onClick={SubmitData}>Submit</button>
  </>);

}
export default App;