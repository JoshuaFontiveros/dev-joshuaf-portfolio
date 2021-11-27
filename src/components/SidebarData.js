import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faFile,
  faTasks,
  faAddressBook,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
  {
    title: 'About Me',
    path: '/aboutme',
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    cName: 'nav-text',
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <FontAwesomeIcon icon={faFile} />,
    cName: 'nav-text',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FontAwesomeIcon icon={faTasks} />,
    cName: 'nav-text',
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FontAwesomeIcon icon={faAddressBook} />,
    cName: 'nav-text',
  },
];
