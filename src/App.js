import React from 'react';
import Clock from './components/Clock'
import Toggle from './components/Toggle'
import List from './components/List'
import NameForm from './components/NameForm'
import Temperature from './components/Temperature'

function App() {
  return (
    <div>
      <Clock />
      <Toggle />
      <List />
      <NameForm />
      <Temperature />
    </div>
  );
}

export default App;
