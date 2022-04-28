import React from 'react';
import background from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animals }) {
  return (
    <main style={{ 
      backgroundImage: `url(${background})` }}>
      <AnimalList animals={animals}/> 
    </main>
  );
}
