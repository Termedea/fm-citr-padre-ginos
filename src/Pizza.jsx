/* Not needed because of eslint.config jsx-runtime configuration
 import React from 'react'; */
/* const Pizza = (props) => {
  //return two siblings within element with array
  return React.createElement('div', {}, [
    React.createElement('h2', {}, props.name),
    React.createElement('p', {}, props.description)
  ]);
};
 */

//arrow function component
const Pizza = ({ name, description, image }) => {
  /* Put render heavy things outside of render path. It's not obvious when react re-renders */

  return (
    <div className={`pizza ${name.toLowerCase()}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
};
export default Pizza;
