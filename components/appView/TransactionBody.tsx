import { CardContent, Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { TableBody, Table } from "@/components/ui/table"
import { CardTitle, CardHeader } from "@/components/ui/card"
import Transaction from "./Transaction"

import { expenseList, savingList } from "@/utils/mockdata"

export default function TransactionBody({ title, data }: { title: string, data: expenseList | savingList }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <ScrollArea className="h-48 rounded-md border">
              {
                data.map((data, index) => (
                  <Transaction key={index} data={data} />
                ))
              }
            </ScrollArea>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}