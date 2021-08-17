import React from 'react'
import ActionButtons from './ActionButtons';

import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app" >
      <Header />

      <TinderCards />

      <ActionButtons />
    </div>
  );
}

export default App;