
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

export default function TransactionList() {
  return (
    <Tabs defaultValue="Savings" className="w-5/6 mx-auto h-max">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Savings">Savings</TabsTrigger>
        <TabsTrigger value="Expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="Savings">
        <TransactionBody title="Savings" />
      </TabsContent>
      <TabsContent value="Expenses">
        <TransactionBody title="Expenses" />
      </TabsContent>
    </Tabs>
  )
}
