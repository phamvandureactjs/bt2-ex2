
import { useState } from 'react';
import './App.css';

import UserForm from './UserForm.js';
import Greeting from './Greeting';
function App() {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <UserForm setUserInput={setUserInput} />
      <Greeting myName1={userInput}/>
    </div>
    
  );
}

export default App;
