import React from 'react';

import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      
      <h1>User Management</h1>
      <User name="md ab rahim" age={24}/>
    </div>
  );
}

export default App;
