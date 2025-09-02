import AccountInformation from './account_information/AccountInformation';
import './BankAccount.css';

const accounts = [
    {
        bankName: 'Celestial Vault Bank',
        accountNumber: '12345678',
        balance: '5,000.00',
        logo: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#f1c40f" strokeWidth="4" fill="#2c3e50" />
                <text x="24" y="30" textAnchor="middle" fill="#f1c40f" fontSize="18" fontFamily="Arial" fontWeight="bold">CV</text>
            </svg>
        )
    },
    {
        bankName: 'Starlight Reserve',
        accountNumber: '87654321',
        balance: '7,367.75',
        logo: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="36" height="36" rx="8" fill="#34495e" stroke="#e67e22" strokeWidth="4" />
                <text x="24" y="30" textAnchor="middle" fill="#e67e22" fontSize="18" fontFamily="Arial" fontWeight="bold">SR</text>
            </svg>
        )
    },
    {
        bankName: 'Celestial Vault Bank',
        accountNumber: '11223344',
        balance: '2,500.00',
        logo: (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#f1c40f" strokeWidth="4" fill="#2c3e50" />
                <text x="24" y="30" textAnchor="middle" fill="#f1c40f" fontSize="18" fontFamily="Arial" fontWeight="bold">CV</text>
            </svg>
        )
    }
];

const BankAccount = () => {
    return (
        <div className="bank_account_outer">
            {accounts.map((account, idx) => (
                <AccountInformation key={idx} account={account} />
            ))}
        </div>
    );
};

export default BankAccount;
