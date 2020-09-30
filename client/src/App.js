import React from 'react';
import './App.css';
import { useAPI } from './hooks/useAPI';
  
  
export default function App() {
  const { api } = useAPI();

  const login = () => {    
    api.get('/login');
  };


  return (
    <div className="app">
      <button onClick={() => login()}>Login</button>
    </div>
  );
}

// export default App;
