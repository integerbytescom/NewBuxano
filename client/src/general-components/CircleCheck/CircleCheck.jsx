import React from 'react';
import "./CircleCheck.css";

const CircleCheck = ({checked}) => {
    return (
        <label className="CircleCheck">
            <input checked={checked} id="ch1" type="checkbox" />
            <div className="transition" />
        </label>
    );
};

export default CircleCheck;
