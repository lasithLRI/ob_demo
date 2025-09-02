import React from 'react';
import './QuickActionButton.css';

const QuickActionButton = ({ icon, size = 24, color = 'currentColor', label, onClick }) => {
    const iconWithProps = icon && React.isValidElement(icon)
        ? React.cloneElement(icon, { width: size, height: size, fill: color })
        : icon;
    return (
        <button className="quick_action_button" onClick={onClick}>
            {iconWithProps}
            <span>{label}</span>
        </button>
    );
}

export default QuickActionButton;