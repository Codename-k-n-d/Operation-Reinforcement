import React from "react";

function Login(): JSX.Element {
  const onclick = ()=>{
    alert('clicked!');
    fetch('localhost:3000/login',{
    method: "POST", 
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
       },
    })
    .then((data)=> console.log('we got data back!: ', data))
  }
  
  return (
    <div>
      <h1>This is Login</h1>
      <form>
        <input className='username-input' placeholder="username"/>
        <input className='password-input'/>
        <button className='submit-button'   onClick = {()=>{
                                                          alert('clicked!');
                                                          fetch('localhost:3000/login',{
                                                          method: "POST", 
                                                          mode: "cors",
                                                          headers: {
                                                            "Content-Type": "application/json",
                                                              },
                                                          })
                                                          .then((data)=> console.log('we got data back!: ', data))
                                                        }}>Login c:</button>
      </form>
    </div>
  )
}

export default Login;