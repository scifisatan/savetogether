import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getTotalSaving } from "@/utils/getRequiredData";

export default async function AmountCard() {
  const totalSaving = getTotalSaving();

  return (
    <Card className="w-5/6 mx-auto my-4 p-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalSaving}</div>
      </CardContent>
    </Card>
  );
}
