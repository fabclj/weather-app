import { FC } from 'react';
import Home from './pages/Home';
import AppProvider from './common/appContext';

const App: FC = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
