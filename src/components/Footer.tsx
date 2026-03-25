import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/flightdynamicist" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/barathc26/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Dare Mighty Things</p>
    </footer>
  );
}

export default Footer;