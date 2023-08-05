import React, { useState } from 'react';

export default function App() {
  const [headingText, setHeadingText] = useState('Hello');
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState('');
  const [headingName, setHeadingName] = useState('');
  
  const handleClick = (event) => {
    // setHeadingText('Submitted');
    setHeadingName(name);

    event.preventDefault();
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
      <h1>Hello {headingName !== '' && headingName + '!'}</h1>
      {/* <h1>{headingText} </h1> */}
      <form onSubmit={handleClick}>
        <input 
          onChange={handleChange} 
          type="text" 
          placeholder="What's your name?" 
          value={name}
        />
        <button 
          type="submit"
          style={ {backgroundColor: isMouseOver ? "black" : "white"} } 
          // onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
