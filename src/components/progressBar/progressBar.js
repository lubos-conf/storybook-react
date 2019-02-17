import React from 'react';
import './progressBar.css';

const ProgressBar = () => (
    <div className="progress-wrapper">
        <div className="progress-bar">
            <div className="side front"><div className="bar"></div></div>
            <div className="side back"><div className="bar"></div></div>
            <div className="side top"><div className="bar"></div></div>
            <div className="side bottom"><div className="bar"></div></div>
            <div className="side left"></div>
        </div>
    </div>
);

export default ProgressBar;