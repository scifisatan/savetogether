
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import TransactionBody from './TransactionBody'
import { getExpenses, getSavings } from "@/utils/getRequiredData"

export default function TransactionList() {

  const savingsList = getSavings()

  const expensesList = getExpenses()

  return (
    <Tabs defaultValue="Savings" className="w-5/6 mx-auto h-max">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Savings">Savings</TabsTrigger>
        <TabsTrigger value="Expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="Savings">
        <TransactionBody title="Savings" data = {savingsList} />
      </TabsContent>
      <TabsContent value="Expenses">
        <TransactionBody title="Expenses" data = {expensesList} />
      </TabsContent>
    </Tabs>
  )
}
