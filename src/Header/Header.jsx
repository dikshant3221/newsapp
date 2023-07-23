import React from 'react';
import './Header.css';
import pic from '../pngwing.com.png'
const Header = () => {

  return (
    <header className="header">
      <div className="logo">
   <img src = {pic} width="850" alt="basket cart icon" />
      </div>
      <div className="fa-3x">
      </div>
    </header>
  );
};

export default Header;