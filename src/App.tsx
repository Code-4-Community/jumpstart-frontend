import React from 'react';
import NavBar from './components/NavBar';
import Landing from './views/Landing';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Landing />
    </div>
  );
};

export default App;
