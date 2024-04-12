import TransactionBody from "./TransactionBody";
import { getTransactions } from "@/utils/getRequiredData";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TransactionList,
} from "@/utils/mockdata";

export default async function TransactionView() {
  const transactionList = await getTransactions();

  const expensesList = transactionList?.filter(
    (transaction) => transaction.type == "Expense"
  );

  const savingsList = transactionList?.filter(
    (transaction) => transaction.type == "Saving"
  );

  return (
    <Tabs defaultValue="Savings" className="w-5/6 mx-auto h-max">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Savings">Savings</TabsTrigger>
        <TabsTrigger value="Expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="Savings">
        <TransactionBody
          title="Savings"
          data={savingsList as TransactionList}
        />
      </TabsContent>
      <TabsContent value="Expenses">
        <TransactionBody
          title="Expenses"
          data={expensesList as TransactionList}
        />
      </TabsContent>
    </Tabs>
  );
}
