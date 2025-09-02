import { Card } from '@oxygen-ui/react';
import './AccountInformation.css';

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
    }
];

const AccountInformation = ({ account = accounts[0] }) => {
    return (
        <Card className="account_information_outer">
            <div className="information_section">
                <div className="bank_info_for_card">
                    <div className="bank_name">{account.bankName}</div>
                    <div className="account_number">{account.accountNumber}</div>
                    <div className="account_balance">
                        <span className="account_gbp">GBP</span> {account.balance}
                    </div>
                </div>
            </div>
            <div className="logo_section">
                {account.logo}
            </div>
        </Card>
    );
};

export default AccountInformation;
export { accounts };
