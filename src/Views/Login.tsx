import React from "react";

function Login(): JSX.Element {
  return (
    <div>
      <h1>This is Login</h1>
      <form>
        <input className='username-input'/>
        <input className='password-input'/>
        <input className='submit-button' type='submit'/>
      </form>
    </div>
  )
}

export default Login;