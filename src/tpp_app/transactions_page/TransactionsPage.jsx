import './TransactionsPage.css';
import TitleAndNavigations from '../../common_components/title_and_navigations/TitleAndNavigations';
import TransactionPageContent from './transaction_page_content/TransactionPageContent';

const TransactionsPage = () => {
    return (
        <div className="transactions_page_outer">
            <TitleAndNavigations title={"Transactions"}/>
            <div className="transaction_content">
                <TransactionPageContent/>
            </div>

        </div>
    );
}

export default TransactionsPage;
