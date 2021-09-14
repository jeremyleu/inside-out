import React, { Fragment } from "react";
import Link from "gatsby-link";

import './index.scss';

const NAV = [
  { name: 'Home', path: '/' },
  { name: 'Team', path: '/team/' },
  { name: 'Approach', path: '/approach/' },
  { name: 'Client Account Access', path: 'https://advisorclient.com/', external: true },
  { name: 'Panoramix', path: 'https://www.panoramixfinancial.com/', external: true },
].map((link) => (
  <div className="nav-link-container">
    {link.external ?
    (
      <a href={link.path} key={link.name} target="_blank">
        {link.name}
      </a>
    ) : (
      <Link to={link.path} key={link.name}>
        {link.name}
      </Link>
    )}
  </div>
));




export default ({ children }) => (
  <div className="container">
    <div className="header">
      Inside-Out Wealth Strategies.
    </div>
    <div className="navigation">
      {NAV}
    </div>
    <hr />
    {children()}
    <hr />
    <div className="footer">
      Questions? Feel free to reach out at{' '}
      <a href="mailto:ksleu@insideoutws.com">ksleu@insideoutws.com</a>{' '}
      or <a href="mailto:achow@insideoutws.com">achow@insideoutws.com</a>.
      <br />
    </div>
  </div>
);
