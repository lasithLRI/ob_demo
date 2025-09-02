import './BodyTitle.css';

const BodyTitle = ({ title }) => {
    return (
        <div className="body_title_outer">
            <h2>{title}</h2>
        </div>
    );
}

export default BodyTitle;