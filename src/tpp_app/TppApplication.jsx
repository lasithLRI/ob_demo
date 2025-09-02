import BankAccount from './bank_account/BankAccount';
import LatestTransactions from './latest_transactions/LatestTransactions';
import StandingOrders from './standing_orders/StandingOrders';
import TotalAndGraph from './total_and_graph/TotalAndGraph';
import TppHeader from './tpp_header/TppHeader';
import './TppApplication.css';
import WelcomeSection from './welcome_section/WelcomeSection';

const TppApplication = () => { 
    return(
        <div className="main_application_outer">
            <TppHeader/>
            <WelcomeSection/>
            <div className="home_content">
                <TotalAndGraph/>
                <BankAccount/>
                <LatestTransactions/>
                <StandingOrders/>
            </div>
        </div>
    );
}

export default TppApplication;