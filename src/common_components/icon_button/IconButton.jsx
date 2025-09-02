import { Button } from '@mui/material';
import'./IconButton.css'
import React from 'react';

const IconButton = ({ icon, size = 24, color = 'currentColor' }) => {
    // Clone icon element with size and color props
    const iconWithProps = icon && React.isValidElement(icon)
        ? React.cloneElement(icon, { width: size, height: size, fill: color })
        : icon;
    return(
        <div>
            <Button className='icon_button'>{iconWithProps}</Button>
        </div>
    );
}

export default IconButton;