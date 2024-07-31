import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Login from './pages/login/Login.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
