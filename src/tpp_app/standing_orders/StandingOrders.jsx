import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@oxygen-ui/react';
import './StandingOrders.css';

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
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Ref456</TableCell>
                            <TableCell>Bank B</TableCell>
                            <TableCell>2025-09-10</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default StandingOrders;
