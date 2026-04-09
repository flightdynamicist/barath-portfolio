import React from "react";
import eng01 from '../assets/images/engineering/reentry_plot_watermark.png';
import eng02 from '../assets/images/engineering/earth-moon-transfer_watermark.png';
import eng03 from '../assets/images/engineering/rendezvous_docking_watermark.png';

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
            <div className="project">
                <img src={eng03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Autonomous Rendezvous and Docking System</h2>
                <p> The simulation illustrates a controlled approach toward a target vehicle, including relative motion dynamics, velocity reduction, and final alignment for safe capture. From long-range phasing to proximity operations — this highlights precision control in orbital environments.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;