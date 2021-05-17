import React from 'react';
import Menu from './Menu';

// Fn Component with Anonymous Function
const Footer = function() {

  const copyrightYear = 2021;

  const myStyles = {
    para1: {
      color: 'green', 
      fontWeight: 'bold', 
      fontSize: '15px', 
      backgroundColor: 'yellow'
    },
    para2: {
      color: '#fff', 
      fontWeight: 'bold', 
      fontSize: '15px', 
      backgroundColor: 'green'
    } 
  }

  // return JSX 
  return (
    <footer className="text-center">
      { /*my comment */ }
      <hr />
      <Menu />
      {/* Inline Styles */}
      <p style={{ color: 'red', fontSize: '14px'}}>Copyright {copyrightYear} | Arun</p> 
      {/* Internal styles */}
      <p style={myStyles.para1}>Made during lockdown 2021</p>
      <p style={myStyles.para2}>Developed a part of React JS Training - May 2021</p>
    </footer>
  )
}

export default Footer;
