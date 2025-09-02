import './HomePage.css';
import BankAccount from './bank_account/BankAccount';
import LatestTransactions from './latest_transactions/LatestTransactions';
import StandingOrders from './standing_orders/StandingOrders';
import TotalAndGraph from './total_and_graph/TotalAndGraph';
import WelcomeSection from './welcome_section/WelcomeSection';
import BodyTitle from './boty_titles/BodyTitle';


const HomePage = () => {
    return (
        <div className="home_page_container">
            <WelcomeSection/>
            <div className="home_content">
                <TotalAndGraph/>
                <BodyTitle title="Connected Accounts" button_text={"Add Button"} varient={'contained'}/>
                <BankAccount/>
                <BodyTitle title="Latest Transactions" button_text={"View All"}/>
                <LatestTransactions/>
                <BodyTitle title="Standing Orders" button_text={"View All"}/>
                <StandingOrders/>
            </div>
        </div>
    );
}

export default HomePage;
