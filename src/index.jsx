import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components/registrace/Registration';

const App = () => {
  return (
    <div className="container">
      <Registration />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
