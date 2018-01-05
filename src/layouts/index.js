import React from "react"

import './index.css';

export default ({ children }) =>
  <div className="container">
    <div className="header">
      Inside-Out Wealth Strategies.
    </div>
    {children()}
  </div>
