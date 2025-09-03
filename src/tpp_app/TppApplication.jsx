
import TppHeader from './tpp_header/TppHeader';
import './TppApplication.css';

import HomePage from './HomePage/HomePage';
import { Route, Routes} from 'react-router-dom';
import TransactionsPage from './transactions_page/TransactionsPage';

const TppApplication = () => {

    return(
        <div className="main_application_outer">
            <TppHeader/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/transactions" element={<TransactionsPage/>} />
            </Routes>
        </div>
    );
}

export default TppApplication;
