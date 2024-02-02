// homepage component

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="home-page">
    <h1>Home Page</h1>
    <p>This is the home page.</p>
    <Link to="/example">Go to Example Feature</Link>
  </div>
);

export default HomePage;
