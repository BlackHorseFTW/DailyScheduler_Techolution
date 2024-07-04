import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import StoryList from './components/StoryList';
import Story from './components/Story';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

