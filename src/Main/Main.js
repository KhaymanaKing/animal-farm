import React from 'react';
import background from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList.js';

export default function Main({ animals }) {
  return (
    <main style={{ 
      height: 'calc(100vh - 50px)',
      'margin-bottom': '40px',   
      'background-repeat': 'no-repeat',
      background: 'auto',
      backgroundImage: `url(${background})` }}>
      <AnimalList animals={animals}/> 
    </main>
  );
}
