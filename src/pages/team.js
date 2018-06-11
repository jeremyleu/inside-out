import React from "react";
import Link from "gatsby-link";

import './team.scss';

export default () => (
  <div>
    <h2>Our Team</h2>
    <div className="team-member-container">
      <h4>Keh-Shiou Kirk Leu, Principal.</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt turpis 
      eget nisi iaculis ultrices. Mauris tempor, nulla eget condimentum finibus, 
      urna ante ultricies libero, at imperdiet tellus velit id mauris. 
      Aenean quis fermentum justo. In tincidunt, justo in convallis tincidunt, 
      leo quam faucibus sapien, non volutpat metus dui eu nunc. Duis molestie nibh 
      eu sem ultrices volutpat. Sed pellentesque, tellus id ultricies dapibus, mi 
      ipsum dignissim lacus, vel faucibus urna libero vehicula justo.
    </div>
    <div className="team-member-container">
      <h4>Annie Chow, Office Manager.</h4>
      Proin sit amet suscipit erat. Pellentesque vel sagittis sem, vitae sagittis erat. 
      Vestibulum sed turpis ut ex lobortis auctor quis non ex. Nulla non vulputate mi. 
      Ut et dolor pharetra, volutpat libero vitae, ultricies est. Suspendisse non nunc 
      elementum, placerat eros porta, euismod nulla. Sed venenatis vel sem vitae 
      sollicitudin. Nunc euismod ac nibh finibus sollicitudin. In massa dolor, blandit 
      a maximus sed, rhoncus et magna. Nulla hendrerit purus ipsum, in luctus nulla 
      malesuada iaculis. 
    </div>
    <Link to="/" className="home-link">Back to home</Link>
  </div>
);