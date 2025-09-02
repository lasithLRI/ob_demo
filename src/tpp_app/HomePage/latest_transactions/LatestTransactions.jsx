import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@oxygen-ui/react';
import './LatestTransaction.css';

const transactions = [
    { id: 1, date: '2025-09-01', reference: 'Ref001', bank: 'Celestial Vault Bank', account: '12345678', amount: '£100.00', type: 'credit' },
    { id: 2, date: '2025-08-30', reference: 'Ref002', bank: 'Barclays', account: '87654321', amount: '£250.00', type: 'debit' },
    { id: 3, date: '2025-08-29', reference: 'Ref003', bank: 'Lloyds', account: '11223344', amount: '£75.00', type: 'credit' },
    { id: 4, date: '2025-08-28', reference: 'Ref004', bank: 'HSBC', account: '44332211', amount: '£500.00', type: 'debit' },
    // ...16 more sample transactions...
    ...Array.from({ length: 16 }, (_, i) => ({
        id: i + 5,
        date: `2025-08-${27 - i}`,
        reference: `Ref${String(i + 5).padStart(3, '0')}`,
        bank: 'Epic Bank',
        account: `ACC${10000000 + i}`,
        amount: `£${(Math.random() * 1000).toFixed(2)}`,
        type: i % 2 === 0 ? 'credit' : 'debit'
    }))
];

const arrowStyle = { fontSize: '1.2em', marginLeft: '0.3em' };
const creditArrowStyle = { ...arrowStyle, color: 'red' };
const debitArrowStyle = { ...arrowStyle, color: 'green' };

const LatestTransactions = () => {
    return (
        <div className="latest_transactions_outer">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Reference</TableCell>
                            <TableCell>Bank</TableCell>
                            <TableCell>Account</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.slice(0, 4).map(tx => (
                            <TableRow key={tx.id}>
                                <TableCell>{tx.id}</TableCell>
                                <TableCell>{tx.date}</TableCell>
                                <TableCell>{tx.reference}</TableCell>
                                <TableCell>{tx.bank}</TableCell>
                                <TableCell>{tx.account}</TableCell>
                                <TableCell>
                                    {tx.amount}
                                    {tx.type === 'credit' ? (
                                        <span style={creditArrowStyle}>&uarr;</span>
                                    ) : (
                                        <span style={debitArrowStyle}>&darr;</span>
                                    )}

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default LatestTransactions;
