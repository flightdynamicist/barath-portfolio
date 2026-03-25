import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faSatellite, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
"Requirements Compliance",
"Mission Concepts",
"System Architecture",
"Budgets & Interfaces",
"Risk Management",
"FMECA",
"Verification & Validation",
"Test Campaigns",
"Commerical Proposals",
"Technical Documentation"
];

const labelsSecond = [
    "STK",
    "GMAT",
    "Orekit",
    "ODTK",
    "QGIS",
    "GDAL",
    "Numerical Optimization Solvers"
];

const labelsThird = [
    "Matlab",
    "Simulink",
    "Basilisk",
    "OpenCV",
    "OpenSource Libraries"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Systems Engineering</h3>
                    <p>End-to-end systems engineering across the full mission lifecycle, with focus on cross-subsystem integration (Mission, GNC, Flight Software, Payload), program-level coordination with risk analysis and mitigtion strategy.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Mission Design & Analysis</h3>
                    <p>
                    <ul><li>Earth Observation & Communication</li>
                        <li>Lunar transfer trajectories & Cis-lunar Navigation</li>
                        <li>Interplanetary Mission Analysis</li>
                        <li>Multi-gravity-assist Planning & Optimization</li>
                        <li>Rendezvous, Proximity Operations & Docking/Undocking</li>
	                    <li>Formation Flying Strategy</li>
                        <li>Trajectory Optimization & Path Planning</li>
	                    </ul></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCrosshairs} size="3x"/>
                    <h3>Guidance, Navigation & Controls</h3>
                    <p>
                    <ul>
                        <li>Build GNC Systems for Moon Landers</li>
                        <li>Planetary Entry, Descent & Landing Systems</li>
                        <li>High precision Earth Imaging Satellites</li>
                        <li>Vision Based Navigation Platforms</li>
                        <li>Flight GNC/Software Verification & Validation</li>
                        <li>Hardware-in-loop testing</li>
                        </ul>    
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;