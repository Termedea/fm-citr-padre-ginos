import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Order from './Order';
import PizzaOfTheDay from './PizzaOfTheDay';
//using api in ../api for styling and images etc.
const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's - Order Now!</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  //Strict mode double renders components to find bugs and warnings
  <StrictMode>
    <App />
  </StrictMode>
);
