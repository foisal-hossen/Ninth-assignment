import React from 'react';

const Footer = () => {
  return (

    <div>
      <footer className="footer p-10 bg-gray-900 font-bold text-base text-slate-400">
  <div>
    <span className="footer-title">Services</span> 
      <p>Branding  </p>
      <p>Design  </p>
      <p>Marketing  </p>
      <p>Advertisement  </p>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
        <p>About us  </p>
        <p>Contact  </p>
        <p>Jobs  </p>
        <p>Press kit  </p>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
        <p>Terms of use  </p>
        <p>Privacy policy  </p>
        <p>Cookie policy  </p>
  </div>
</footer>
    </div>

  );
};

export default Footer;