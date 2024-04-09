import React from 'react'
import { TableRow, TableCell } from '../ui/table'
import { TransactionRecord } from '@/utils/mockdata'

const Transaction = (props: { key: number, data: TransactionRecord }) => {
    return (
        <>
            <TableRow>
                <TableCell>
                    <div className="font-medium">{props.data.title}</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">{props.data.date}</div>
                </TableCell>
                <TableCell className="text-right ">${props.data.amount}</TableCell>
            </TableRow>
        </>
    )
}

export default Transaction