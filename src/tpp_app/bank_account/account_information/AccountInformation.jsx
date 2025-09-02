import { Card } from '@oxygen-ui/react';
import './AccountInformation.css';

const AccountInformation = () => {
    return (
        <Card className="account_information_outer">
            <div className="information_section">
                <div className="bank_info_for_card"></div>
                <div className="system_info_for_card"></div>
            </div>
            <div className="logo_section"></div>
        </Card>
    );
};

export default AccountInformation;
