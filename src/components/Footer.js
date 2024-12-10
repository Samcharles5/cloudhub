import React from 'react';
import img from '../assets/images/team.png';
import backgroundImage from '../assets/images/BGimg.png';


const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',backgroundPosition: 'center'
  };

  const footerLogoStyle = {
    width: '50px',
    height: 'auto',
  };

  const footerColumnsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '20px 0',
  };

  const footerColumnStyle = {
    margin: '10px 20px',
  };

  const footerColumnHeaderStyle = {
    marginBottom: '10px',
  };

  const footerColumnListStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const footerColumnListItemStyle = {
    marginBottom: '5px',
  };

  const footerLinkStyle = {
    textDecoration: 'none',
    color: '#333',
  };

  const footerBottomStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  return (
    <footer className='animated-background' style={footerStyle}  >
      <div>
        <img src={img} alt="Logo" style={footerLogoStyle} className='rotate' /> 
      </div>
      <div style={footerColumnsStyle}>
        <div style={footerColumnStyle}>
          <h4 style={footerColumnHeaderStyle}>Product</h4>
          <ul style={footerColumnListStyle}>
            <li style={footerColumnListItemStyle}><a href="#features" style={footerLinkStyle}>Features</a></li>
            <li style={footerColumnListItemStyle}><a href="#pricing" style={footerLinkStyle}>Pricing</a></li>
            <li style={footerColumnListItemStyle}><a href="#changelog" style={footerLinkStyle}>Changelog</a></li>
            <li style={footerColumnListItemStyle}><a href="#support" style={footerLinkStyle}>Support</a></li>
          </ul>
        </div>
        <div style={footerColumnStyle}>
          <h4 style={footerColumnHeaderStyle}>Legal</h4>
          <ul style={footerColumnListStyle}>
            <li style={footerColumnListItemStyle}><a href="#terms-of-privacy" style={footerLinkStyle}>Terms of Privacy</a></li>
            <li style={footerColumnListItemStyle}><a href="#privacy-policy" style={footerLinkStyle}>Privacy Policy</a></li>
            <li style={footerColumnListItemStyle}><a href="#security" style={footerLinkStyle}>Security</a></li>
          </ul>
        </div>
        <div style={footerColumnStyle}>
          <h4 style={footerColumnHeaderStyle}>Company</h4>
          <ul style={footerColumnListStyle}>
            <li style={footerColumnListItemStyle}><a href="#blog" style={footerLinkStyle}>Blog</a></li>
            <li style={footerColumnListItemStyle}><a href="#contact" style={footerLinkStyle}>Contact</a></li>
          </ul>
        </div>
        <div style={footerColumnStyle}>
          <h4 style={footerColumnHeaderStyle}>Social</h4>
          <ul style={footerColumnListStyle}>
            <li style={footerColumnListItemStyle}><a href="#dribbble" style={footerLinkStyle}>Dribbble</a></li>
            <li style={footerColumnListItemStyle}><a href="#behance" style={footerLinkStyle}>Behance</a></li>
            <li style={footerColumnListItemStyle}><a href="#discord" style={footerLinkStyle}>Discord</a></li>
          </ul>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p>All rights reserved. © 2024 ThinkMetal</p>
      </div>
    </footer>
  );
};

export default Footer;
