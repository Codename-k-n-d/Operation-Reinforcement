import React, {FC} from "react";
import Card from '../Components/Card'

const Home = (): JSX.Element =>{
  const cards = [];
  for(let i = 0; i<9; i++) cards.push(<Card/>)
  return (
    <div>
      <h1>This is Home</h1>
      {/* return cards */}
      {cards}
    </div>
  )

} 



export default Home;