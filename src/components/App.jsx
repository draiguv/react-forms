import React, { useState } from 'react';

export default function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [fullName, setFullName] = useState({fName: '', lName: ''})
  const [headingName, setHeadingName] = useState('');
  
  const handleClick = (event) => {
    formatName(fullName.fName, fullName.lName);
    event.preventDefault();
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  const formatName = (fName, lName) => {
    if (fName == '' || lName == '') {
      setHeadingName(`${fName == '' ? lName : fName}`);
    } else if (fName == '' && lName == ''){
      setHeadingName('');
    } else {
      setHeadingName(`${fName} ${lName}`);
    }
  };

  const handleFNameChange = (event) => {
    setFName(event.target.value);
    // setHeadingName(`${event.target.value} ${lName}`);
    formatName(event.target.value, lName);
  };

  const handleLNameChange = (event) => {
    setLName(event.target.value);
    // setHeadingName(`${fName} ${event.target.value}`);
    formatName(fName, event.target.value);
  };

  const updateFullName = (event) => {
    const {name, value} = event.target;
    
    // if (name === 'fName') {
    //   setFullName({fName: value, lName: fullName.lName});
    //   formatName(value, fullName.lName);
    // } else {
    //   setFullName({fName: fullName.fName, lName: value});
    //   formatName(fullName.fName, value);
    // }

    setFullName(prev => {
        if (name === 'fName') {
          formatName(value, prev.lName);
          return {fName: value, lName: prev.lName}
        } else {
          formatName(prev.fName, value);
          return {fName: prev.fName, lName: value}
        }
      }
    );
  };

  return (
    <div className="container">
      <h1>Hello {headingName !== '' && headingName + '!'}</h1>
      <form onSubmit={handleClick}>
        <input 
          // onChange={handleFNameChange} 
          onChange={updateFullName} 
          type="text" 
          name="fName" 
          placeholder="First Name" 
          value={fullName.fName}
        />
        <input 
          // onChange={handleLNameChange} 
          onChange={updateFullName} 
          type="text" 
          name="lName" 
          placeholder="Last Name" 
          value={fullName.lName}
        />
        <button 
          type="submit"
          style={ {backgroundColor: isMouseOver ? "black" : "white"} } 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
