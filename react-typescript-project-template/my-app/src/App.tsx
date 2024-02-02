import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes'; // Adjust the import path based on your project structure
import { Provider } from 'react-redux';
import { store } from './app/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
