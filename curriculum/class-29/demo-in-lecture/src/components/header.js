import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stuff">Stuff</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;