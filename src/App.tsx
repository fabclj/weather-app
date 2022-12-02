import React from 'react';
import Home from './pages/Home';
import AppProvider from './common/appContext';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
