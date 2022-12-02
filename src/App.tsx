import { FC } from 'react';
import Home from './pages/Home';
import AppProvider from './common/appContext';
import './App.css';

const App: FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
