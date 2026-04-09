import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import eng01 from '../assets/images/engineering/reentry_plot_watermark.png';
import eng02 from '../assets/images/engineering/earth-moon-transfer_watermark.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Project Insights</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={eng01} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Spacecraft Re-entry and Controlled Landing</h2>
                <p> Physics-based simulation of atmospheric re-entry and controlled descent.
                    Modelled trajectory evolution, aerodynamic forces, and thermal loading at a conceptual level.
                    Includes phase-wise descent behavior from de-orbit to touchdown for system-level analysis </p>
            </div>
            <div className="project">
                <img src={eng02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Cislunar Transfer Trajectory Architecture</h2>
                <p> Earth–Moon transfer, capturing injection, transit, and lunar approach phases. Colored trajectories represent guidance-driven path evolution under gravitational dynamics. From orbit design to terminal approach — a glimpse into precision GNC in deep space</p>
            </div>
        </div>
    </div>
    );
}

export default Project;