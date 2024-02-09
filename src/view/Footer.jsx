import React from 'react';

const Footer = ({val}) => {
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <aside>
        <p>{val}</p>
      </aside>
    </footer>

  );
};

export default Footer;