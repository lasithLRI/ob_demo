import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TextField, MenuItem } from '@oxygen-ui/react';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import './TransactionPageContent.css';

const transactions = [
    { id: 1, date: '2025-09-01', bank: 'Celestial Vault Bank', account: '12345678', reference: 'Ref001', amount: '£100.00', type: 'credit' },
    { id: 2, date: '2025-08-30', bank: 'Barclays', account: '87654321', reference: 'Ref002', amount: '£250.00', type: 'debit' },
    { id: 3, date: '2025-08-29', bank: 'Lloyds', account: '11223344', reference: 'Ref003', amount: '£75.00', type: 'credit' },
    { id: 4, date: '2025-08-28', bank: 'HSBC', account: '44332211', reference: 'Ref004', amount: '£500.00', type: 'debit' },
    // ...add more sample data to reach at least 20 records...
    ...Array.from({ length: 16 }, (_, i) => ({
        id: i + 5,
        date: `2025-08-${27 - i}`,
        bank: ['Celestial Vault Bank', 'Barclays', 'Lloyds', 'HSBC'][i % 4],
        account: `ACC${10000000 + i}`,
        reference: `Ref${String(i + 5).padStart(3, '0')}`,
        amount: `£${(Math.random() * 1000).toFixed(2)}`,
        type: i % 2 === 0 ? 'credit' : 'debit'
    }))
];

const arrowStyle = { fontSize: '1.2em', marginRight: '0.3em' };
const creditArrowStyle = { ...arrowStyle, color: 'red' };
const debitArrowStyle = { ...arrowStyle, color: 'green' };

const PAGE_SIZE = 10;

const TransactionPageContent = () => {
    // Placeholder filter states (logic to be implemented later)
    const [dateFilter, setDateFilter] = useState('');
    const [bankFilter, setBankFilter] = useState('');
    const [accountFilter, setAccountFilter] = useState('');
    const [page, setPage] = useState(1);

    // Unique values for filter dropdowns
    const uniqueDates = [...new Set(transactions.map(tx => tx.date))];
    const uniqueBanks = [...new Set(transactions.map(tx => tx.bank))];
    const uniqueAccounts = [...new Set(transactions.map(tx => tx.account))];

    // Paginate transactions
    const paginatedTransactions = transactions.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    const pageCount = Math.ceil(transactions.length / PAGE_SIZE);

    return (
        <div className="transaction_page_content_outer">
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Transaction ID</TableCell>
                            <TableCell>
                                Date<br />
                                <TextField
                                    select
                                    size="small"
                                    value={dateFilter}
                                    onChange={e => setDateFilter(e.target.value)}
                                    style={{ minWidth: 100 }}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {uniqueDates.map(date => (
                                        <MenuItem key={date} value={date}>{date}</MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell>
                                Bank<br />
                                <TextField
                                    select
                                    size="small"
                                    value={bankFilter}
                                    onChange={e => setBankFilter(e.target.value)}
                                    style={{ minWidth: 120 }}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {uniqueBanks.map(bank => (
                                        <MenuItem key={bank} value={bank}>{bank}</MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell>
                                Account ID<br />
                                <TextField
                                    select
                                    size="small"
                                    value={accountFilter}
                                    onChange={e => setAccountFilter(e.target.value)}
                                    style={{ minWidth: 100 }}
                                >
                                    <MenuItem value="">All</MenuItem>
                                    {uniqueAccounts.map(acc => (
                                        <MenuItem key={acc} value={acc}>{acc}</MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell>Reference</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedTransactions.map(tx => (
                            <TableRow key={tx.id}>
                                <TableCell>{tx.id}</TableCell>
                                <TableCell>{tx.date}</TableCell>
                                <TableCell>{tx.bank}</TableCell>
                                <TableCell>{tx.account}</TableCell>
                                <TableCell>{tx.reference}</TableCell>
                                <TableCell>
                                    {tx.type === 'credit' ? (
                                        <span style={creditArrowStyle}>&uarr;</span>
                                    ) : (
                                        <span style={debitArrowStyle}>&darr;</span>
                                    )}
                                    {tx.amount}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Pagination
                    count={pageCount}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    color="primary"
                />
            </div>
        </div>
    );
};

export default TransactionPageContent;
