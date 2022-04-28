import React from 'react';
import './Animal.css';
export default function AnimalItem({ animal: { name, type, says, top, left } }) {
  return (
    <div className= 'animalCard'
      style={{
        position: 'absolute',
        top: top,
        left: left,
      }}
    >
      <p>{name}</p>
      <img src= {`../images/${type}.svg`}/>  
      <p>{says}</p>
      
    </div>
  );
}
