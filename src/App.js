const Pizza = (props) => {
  //return two siblings within element with array
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('p', {}, props.description)
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: 'Margherita',
      description: 'Tomato, mozzarella, and basil'
    }),
    React.createElement(Pizza, {
      name: 'Pepperoni',
      description: 'Tomato, mozzarella, and pepperoni'
    }),
    React.createElement(Pizza, {
      name: 'Hawaiian',
      description: 'Tomato, mozzarella, ham, and pineapple'
    }),
    React.createElement(Pizza, {
      name: 'Vegetarian',
      description: 'Tomato, mozzarella, and seasonal vegetables'
    }),
    React.createElement(Pizza, {
      name: 'Quattro Formaggi',
      description: 'Tomato, mozzarella, gorgonzola, parmesan, and fontina'
    }),
    React.createElement(Pizza, {
      name: 'Diavola',
      description: 'Tomato, mozzarella, and spicy salami'
    })
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
