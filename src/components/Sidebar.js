import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import Profile from '../assets/profile_pic.jpg';

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sidebar);
  return (
    <React.Fragment>
      <div className='sidebar'>
        <Link to='#' className='menu-bars'>
          <FontAwesomeIcon icon={faBars} onClick={showSideBar} />
        </Link>
        {/* <div className='logo'>
          J <div className='slant'></div>F
        </div> */}
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSideBar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <FontAwesomeIcon icon={faTimes} />
              {/* <FontAwesomeIcon icon={faTimes} /> */}
            </Link>
          </li>
          <li id='name'>
            <img src={Profile} alt='profile logo' />
            <h3>Joshua Fontiveros</h3>
            <p>Full-Stack Web Developer</p>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.icon} </span>
                  <span>{item.title}</span>
                </Link>{' '}
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar;
