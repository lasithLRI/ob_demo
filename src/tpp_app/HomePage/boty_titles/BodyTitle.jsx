import { Button } from '@oxygen-ui/react';
import './BodyTitle.css';

const BodyTitle = ({ title, button_text, varient }) => {
    return (
        <div className="body_title_outer">
            <h2>{title}</h2>
            <Button color="primary" size="small" variant={varient}> {button_text}</Button>
        </div>
    );
}

export default BodyTitle;
