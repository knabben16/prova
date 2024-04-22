import React from 'react';
import './Session.css';

const Session = ({ title, description, datetime, location }) => {
    return (
        <div className="session">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="info">
                <span><i className="fas fa-calendar-alt"></i> {datetime}</span>
                <span><i className="fas fa-map-marker-alt"></i> {location}</span>
            </div>
            <button className="btn">Inscrever-se</button>
        </div>
    );
};

export default Session;
