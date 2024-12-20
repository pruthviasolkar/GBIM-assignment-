import React, { useState } from 'react';
import './togglebtn.css'; // Import CSS for styling

const ToggleSwitch = () => {
    const [isAgency, setIsAgency] = useState(true);

    const handleToggle = () => {
        setIsAgency(!isAgency);
    };

    return (
        <div className="toggle-container" onClick={handleToggle}>
            <div className={`toggle-slider ${isAgency ? "agency" : "individual"}`}>
                 
            </div>
            <div className="toggle-background">
                <span className={`background-label ${isAgency ? "inactive" : ""}`}>
                    Agency
                </span>
                <span className={`background-label ${!isAgency ? "inactive" : ""}`}>
                    Individual
                </span>
            </div>
        </div>
    );
};

export default ToggleSwitch;
