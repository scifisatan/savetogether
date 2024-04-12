"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import TransactionForm from "./TransactionForm";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex">
        <div className="mx-auto my-3">
          <DrawerTrigger className="w-full" asChild>
            <Button className="text-black" variant="outline">
              Add Transaction
            </Button>
          </DrawerTrigger>
        </div>
      </div>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>How much did you save today?</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-6">
            <TransactionForm setIsOpen={setIsOpen} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
