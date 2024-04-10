import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TransactionBody from "./TransactionBody";
import { getTransactions } from "@/utils/getRequiredData";

export default function TransactionList() {
  const transactionList = getTransactions();
  const expensesList = transactionList.filter(
    (transaction) => transaction.type == "Expense"
  );
  const savingsList = transactionList.filter(
    (transaction) => transaction.type == "Saving"
  );

  return (
    <Tabs defaultValue="Savings" className="w-5/6 mx-auto h-max">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Savings">Savings</TabsTrigger>
        <TabsTrigger value="Expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="Savings">
        <TransactionBody title="Savings" data={savingsList} />
      </TabsContent>
      <TabsContent value="Expenses">
        <TransactionBody title="Expenses" data={expensesList} />
      </TabsContent>
    </Tabs>
  );
}
