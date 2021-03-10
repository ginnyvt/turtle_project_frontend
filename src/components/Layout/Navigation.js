import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav className='nav'>
      <div class='nav_container'>
        <Link to='/' className='logo'>
          Turtles'world
        </Link>

        <ul className='nav_list'>
          <li className='nav_links'>
            <Link to='/new-turtle' className='nav_link'>
              Create new turtle
            </Link>
          </li>

          <li className='nav_links'>
            <Link to='/find-turtle' className='nav_link'>
              Find your turtle
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
