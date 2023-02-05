import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Users from './components/Users/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/users" exact element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
