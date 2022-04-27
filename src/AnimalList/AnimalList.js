import React from 'react';

export default function AnimalList({ animals }) {
  return ( 
    <div>
      {animals.map ((animal) => <Animal key= {animal.name} {...animal}/>)}
    </div>
  );
}
