import AccountInformation from './account_information/AccountInformation';
import './BankAccount.css';

const BankAccount = () => {
    return (
        <div className="bank_account_outer">
            <AccountInformation/>
            <AccountInformation/>
            <AccountInformation/>
        </div>
    );
};

export default BankAccount;
