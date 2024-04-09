import { CardContent, Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
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
            <ScrollArea className="h-48">
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
                <Transaction/>
            </ScrollArea>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}