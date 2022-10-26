import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1> Material UI Practice</h1>
      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to='/create'>Create</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;