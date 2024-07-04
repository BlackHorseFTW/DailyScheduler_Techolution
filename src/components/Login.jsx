import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const validUsername = '';
    const validPassword = '';

    if (username === validUsername && password === validPassword) {
      onLogin();
    } else {
      alert('Invalid credentials. Please enter correct username and password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Stories</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
