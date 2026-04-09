import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Spacecraft GNC & Mission Design</h3>
            <h4 className="vertical-timeline-element-subtitle">Independent Consultant</h4>
            <p>
            Advised  teams on  Atmospheric re-entry, descent & landing (EDL) for microgravity studies, Guided development of high fidelity simulations for spacecraft Rendezvous, Proximity & Docking Operations
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2022 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior AOCS Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Pixxel Space</h4>
            <p>
            Led AOCS design and analysis for high-resolution Earth observation satellites, enabling agile imaging operations
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2021 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Principal Systems Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">TeamIndus, Axiom Research Labs</h4>
            <p>
            Systems Engineering for commerical proposals, payload requirements compliance, and satellite development, Led the GNC and mission design team for development of Lunar  constellation program
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2018 - Apr 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior GNC Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">TeamIndus, Axiom Research Labs</h4>
            <p> Part of the team that was initially awarded $97 million to engineer moon lander (via OrbitBeyond Consortium) by NASA CLPS program <a href="https://www.firstpost.com/tech/science/team-indus-partner-orbitbeyond-drops-out-of-nasa-contract-for-2020-moon-lander-mission-7085241.html" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} className="external-link-icon" /></a>, Led processor / hardware in loop test campaigns from GNC team side for lander flight readiness</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2013 - May 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mission Design & GNC Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">TeamIndus, Axiom Research Labs</h4>
            <p> Team that won $1 million <a href="https://www.cnet.com/science/glxp-milestone-prizes-awarded/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faUpRightFromSquare} className="external-link-icon" /></a> for succesful demonstration of moon landing system, TMP - GLXP, Built high-fidelity 6-DOF moon landing GNC simulations, performed mission analysis for earth-moon transfer orbits
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;