import React from 'react';
import Menu from './Menu';

// Fn Component with Anonymous Function
const Footer = function() {
  // return JSX 
  return (
    <footer>
      <hr />
      <Menu />
      <p>Copyright 2021 | Arun</p>
    </footer>
  )
}

export default Footer;
