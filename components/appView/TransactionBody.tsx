import { CardContent, Card } from "@/components/ui/card"

import { TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardHeader } from "@/components/ui/card"
import Transaction from "./Transaction"
export default function TransactionBody({ title }: { title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}