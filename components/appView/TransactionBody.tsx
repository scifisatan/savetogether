import { CardContent, Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardHeader } from "@/components/ui/card"
import Transaction from "./Transaction"

import { TransactionList } from "@/utils/mockdata"

export default function TransactionBody({ title, data }: { title: string, data: TransactionList }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="min-h-min max-h-48 rounded-md border">
          <Table>
            <TableBody>

              {
                data.map((data, index) => (
                  <Transaction key={index} data={data} />
                ))
              }
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}