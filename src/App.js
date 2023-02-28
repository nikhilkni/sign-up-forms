import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      alert("password Not Match");
    }
    else {
      alert('A form was submitted with Name :"' + name +
        '" ,Age :"' + age + '" and Email :"' + email + '"');
    }
    e.preventDefault();

  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label><br />
          <input className="userInput" type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />
          <label ><br />
            Age:
          </label><br />
          <input className="userInput" type="text" value={age} required onChange={(e) => { handleAgeChange(e) }} /><br />
          <label><br />
            Email:
          </label><br />
          <input className="userInput" type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label><br />
            Password:
          </label><br />
          <input className="userInput" type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label><br />
            Confirm Password:
          </label><br />
          <input className="userInput" type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br /><br />
          <input className='submit' type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
