import React from 'react';
import HomePage from './views/HomePage';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
