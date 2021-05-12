import React from 'react';
import Menu from './Menu';

// Fn Component with Anonymous Function
const Footer = function() {

  const copyrightYear = 2021;

  // return JSX 
  return (
    <footer className="text-center">
      <hr />
      <Menu />
      <p>Copyright {copyrightYear} | Arun</p>
    </footer>
  )
}

export default Footer;
