import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@oxygen-ui/react';
import './LatestTransaction.css'

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
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>2025-09-02</TableCell>
                            <TableCell>Ref123</TableCell>
                            <TableCell>Bank A</TableCell>
                            <TableCell>12345678</TableCell>
                            <TableCell>$100.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default LatestTransactions;
