
import TppHeader from './tpp_header/TppHeader';
import './TppApplication.css';

import HomePage from './HomePage/HomePage';

const TppApplication = () => {
    return(
        <div className="main_application_outer">
            <TppHeader/>
            <HomePage/>
        </div>
    );
}

export default TppApplication;
