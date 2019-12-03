import React from 'react';
import './AppHeader.scss';

const AppHeader = ({ peopleNumber }) => {
  render (
    <h1 className="AppHeader">Here are {peopleNumber} People</h1>
  )
}

export default AppHeader;