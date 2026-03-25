import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilepic from '../assets/images/barath-center-zoom.jpeg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilepic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/flightdynamicist/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/barathc26/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Barath Charles</h1>
          <p>Spacecraft GNC & Mission Design Consultant</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/flightdynamicist/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/barathc26/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;