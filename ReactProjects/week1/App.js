/*function App(){
    return <h1>Hey Lets look </h1>
}
export default App */
// This line is important to make the App code visible on the web

// for mutlipe html embeddings

/*function App(){
    return(
        <>
        <h1> Hola Amigo!!</h1>
        <h2>Wowoowwowoow!</h2>
        </>
    )
}
export default App
*/

/*
function App(){
    const name = "Kai"
    let x = 0
    const inc = ()=>{
        x+=1
    }

    return (<>
    <h1>Data type example!! or doing something in the function body</h1>
    <h2>Look iam {name}</h2>
    <h2>Now a number is passed :{x}</h2>
    <button onclick={inc}>increment </button>
      </>      
    
    )
}*/
// method to call a function from event listener = {function_name}

// This above code wont be incrementing the value as we have the return statement to be last running it wouldnt change the value
//The value would be updated but not replicated on the window.





function App(){
    const name = "Kai"
    const [count,setcount] = useState(0)
    const inc = ()=>{
        // count=count+1
        //to perform above we need to do this 
        setcount(count+1) // here in the useState also the value get updated 
        //the count variable is not the simple varaiable its a useState varaiable 
        //As we click the button the useState intiate the reload or rexecute the interior return block
        
    }

    return (<>
    <h1>Data type example!! or doing something in the function body</h1>
    <h2>Look iam {name}</h2>
    <h2>Now a number is passed :{count}</h2>
    <button onclick={inc}>increment </button>
      </>      
    
    )
}


// useState --> every time you are updating

function App(){
    const [name,setName] = useState("")
    const Change = (s)=>{
        setName(s.target.value)
    }

    return (
        <>
            <h1>Hey man, I am {name}</h1>
            <input type ="name" placeholder="enter your name" onChange={Change}></input>
        </>
    )
}
// export default App()
// Here we are passing whole input to the function and there we are using .target.value to access the value entered in the input field.



function App(){

    return(
        <>
        <BrowserRouter>

        <Routes>
            <Route path="/log" element = {<Login/>}></Route> 
              <Route path="/reg" element = {<Register/>}></Route>
                <Route path="/" element = {<Home/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )


}
export default App

//routing multiple pages in the main App.js then navigating 
