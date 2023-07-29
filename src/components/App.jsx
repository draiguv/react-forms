import React, { useState } from 'react';

export default function App() {
  const [headingText, setHeadingText] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState('');
  
  const handleClick = () => {
    setHeadingText('Submitted');
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  return (
    <div className="container">
      <h1>Hello {name !== '' && name + '!'}</h1>
      {/* <h1>{headingText} </h1> */}
      <input 
        onChange={handleChange}
        type="text" 
        placeholder="What's your name?" 
      />
      <button 
        style={ {backgroundColor: isMouseOver ? "black" : "white"} } 
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}
