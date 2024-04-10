'use client'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";
import TransactionForm from "./TransactionForm"
import { useState } from "react";
export default function Page() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline">Add Transaction</Button>
            </DrawerTrigger>
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