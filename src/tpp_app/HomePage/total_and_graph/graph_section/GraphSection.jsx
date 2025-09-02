import { Card } from '@oxygen-ui/react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import './GraphSection.css';

// Data from BankAccount.jsx
const accounts = [
    { bankName: 'Celestial Vault Bank', balance: '5,000.00' },
    { bankName: 'Starlight Reserve', balance: '7,367.75' },
    { bankName: 'Celestial Vault Bank', balance: '2,500.00' }
];

// Aggregate balances by bank name
const bankTotals = accounts.reduce((acc, curr) => {
    const name = curr.bankName;
    const balance = parseFloat(curr.balance.replace(/,/g, ''));
    acc[name] = (acc[name] || 0) + balance;
    return acc;
}, {});

const pieData = {
    labels: Object.keys(bankTotals),
    datasets: [
        {
            data: Object.values(bankTotals),
            backgroundColor: ['#f1c40f', '#34495e', '#2c3e50'],
            borderWidth: 2,
        },
    ],
};

const pieOptions = {
    plugins: {
        legend: {
            position: 'left',
            align: 'center',
            labels: {
                boxWidth: 20,
                padding: 20,
            },
        },
    },
    cutout: '70%', // Makes the center empty like an O
};

const GraphSection = () => {
    return (
        <Card className="graph_section">

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',  }}>
                <div style={{ maxWidth: 350, width: '100%' }}>
                    <Doughnut data={pieData} options={pieOptions} />

                </div>
            <h3>Bank Balances Distribution</h3>

            </div>
        </Card>
    );
};

export default GraphSection;
