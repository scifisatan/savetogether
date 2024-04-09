import React from 'react'
import { TableRow, TableCell } from '../ui/table'
import { expense, saving } from '@/utils/mockdata'

const Transaction = (props: { index: number, data: saving | expense }) => {
    return (
        <>
            <TableRow>
                <TableCell>
                    {props.data.name ? (
                        <div className="font-medium">{props.data.name}</div>
                    ) : (
                        <div className="font-medium">{props.data.date}</div>
                    )}
                    <div className="hidden text-sm text-muted-foreground md:inline">{props.data.date}</div>

                </TableCell>
                <TableCell className="text-right ">${props.data.amount}</TableCell>
            </TableRow>
        </>
    )
}

export default Transaction