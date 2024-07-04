import React, { useState } from 'react';
import StoryList from './StoryList';
import Login from './Login';
import './App.css'

function App() {
  
  
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>

      {isLoggedIn ? (
        <>
          <StoryList />
        </>
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
