import React from 'react';
import './App.css';
import MyBookings from './pages/MyBookings';  

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Bus2Go</h1>
      <MyBookings />  {/* Render the MyBookings component */}
    </div>
  );
};

export default App;
