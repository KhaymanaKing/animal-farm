import React from 'react';
import AnimalItem from '../Animal/Animal';
export default function AnimalList({ animals }) {
  return ( 
    <div>
      {animals.map ((animal) => <AnimalItem key= {animal.name} animal={animal}/>)}
    </div>
  );
}
