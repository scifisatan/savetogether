import React from 'react'
import { TableRow, TableCell } from '../ui/table'

const Transaction = () => {
    return (
        <>
            <TableRow>
                <TableCell>

                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">2023-06-23</div>

                </TableCell>
                <TableCell className="text-right ">$250.00</TableCell>
            </TableRow>
        </>
    )
}

export default Transaction