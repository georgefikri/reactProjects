import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  // states
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // methods

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUserName(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (userName.length && password.length) {
      navigate('/users');
    }
  };

  // hooks
  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        <div className="login__logo">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt="bootstrap logo"
          />
        </div>
        <div className="login__userName">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userName}
            onChange={handleOnChange}
          />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>

        <div className="login__button">
          <button type="submit">login</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
