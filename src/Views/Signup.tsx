import React from "react";

function Signup(): JSX.Element {
  return (
    <div>
      This is a Signup
      <form>
        <input className='username-input'/>
        <input className='password-input'/>
        <input className='password-confirm-input'/>
        <input className='submit-button' type='submit'/>
      </form>
    </div>
  )
}

export default Signup;