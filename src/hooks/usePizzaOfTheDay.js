import { useState, useEffect, useDebugValue } from 'react';

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  //use useDebugValue to show the pizza of the day in the React DevTools
  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id}:${pizzaOfTheDay.name}` : 'Loading...'
  );

  async function fetchPizzaOfTheDay() {
    const pizzaJson = await fetch('/api/pizza-of-the-day').then((res) =>
      res.json()
    );

    setPizzaOfTheDay(pizzaJson);
  }

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
