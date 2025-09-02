import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@oxygen-ui/react';
import './StandingOrders.css';

const standingOrders = [
    { id: 1, reference: 'SO001', bank: 'Celestial Vault Bank', nextDate: '2025-09-10', status: 'Active', amount: '£250.00' },
    { id: 2, reference: 'SO002', bank: 'Barclays', nextDate: '2025-09-15', status: 'Paused', amount: '£100.00' },
    { id: 3, reference: 'SO003', bank: 'Lloyds', nextDate: '2025-09-20', status: 'Active', amount: '£75.00' },
    { id: 4, reference: 'SO004', bank: 'HSBC', nextDate: '2025-09-25', status: 'Cancelled', amount: '£500.00' },
    // ...16 more sample standing orders...
    ...Array.from({ length: 16 }, (_, i) => ({
        id: i + 5,
        reference: `SO${String(i + 5).padStart(3, '0')}`,
        bank: 'Epic Bank',
        nextDate: `2025-09-${26 - i}`,
        status: ['Active', 'Paused', 'Cancelled'][i % 3],
        amount: `£${(Math.random() * 1000).toFixed(2)}`
    }))
];

const StandingOrders = () => {
    return (
        <div className="standing_orders_outer">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Reference</TableCell>
                            <TableCell>Bank</TableCell>
                            <TableCell>Next Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standingOrders.slice(0, 4).map(order => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.reference}</TableCell>
                                <TableCell>{order.bank}</TableCell>
                                <TableCell>{order.nextDate}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell>{order.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default StandingOrders;
