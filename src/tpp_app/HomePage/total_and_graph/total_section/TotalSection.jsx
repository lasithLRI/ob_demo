import { Card } from '@oxygen-ui/react';
import './TotalSection.css';


const TotalSection = () => {
    return (
        <Card className="total_section_outer">
            <div className="total_section_title">
                Total Balances
            </div>
            <div className="total_section_amount">
                GBP 12,367.75
            </div>

            <div className="total_section_accounts">
                Total: 3 accounts from 2 banks
            </div>

            <div className="total_section_updated">
                last updated : 1min ago
            </div>
        </Card>
    );
}

export default TotalSection;
