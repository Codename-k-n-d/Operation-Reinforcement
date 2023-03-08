import React from "react";
interface card {};


const Card= (props:any): JSX.Element => {
  return (
    <div id = "card">
      <h3>
       <b>Brach</b>
      </h3>
      <p>
        <b>Status:</b> Homeless, jobless
      </p>
        <p>
          <b>Applications:</b> 349
        </p>
        <p>
          <b>Interviews:</b> 2
        </p>
        <p>
          <b>Companies:</b> Dogecoin, Madoff Investment Securities
        </p>
    </div>
  )
}

export default Card;