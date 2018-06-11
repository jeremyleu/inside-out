import React from "react";
import Link from "gatsby-link";

import './approach.scss';

export default () => (
  <div>
    <h2>Approach</h2>
    <div className="approach-container">
      Nunc non semper urna. Quisque fringilla ultrices sem eu fringilla. 
      Aliquam et odio quis sem bibendum blandit cursus in lacus. Sed 
      efficitur imperdiet libero at lobortis. Etiam nec purus dapibus, 
      placerat lorem a, rhoncus lorem. Suspendisse sed urna velit. Nulla 
      vulputate quam eget justo venenatis, eget egestas dui commodo. 
      Cras sit amet elit ut neque ultricies luctus ac a lorem. 
      Cras mi tellus, sodales ut enim ut, consequat hendrerit mauris.
    </div>
    <Link to="/" className="home-link">Back to home</Link>
  </div>
);