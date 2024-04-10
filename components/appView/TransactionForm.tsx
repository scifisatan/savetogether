"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";

const FormSchema = z.object({
    type: z.enum(["Saving", "Expense"]),
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title must be string",
    }),
    amount: z.number().gt(0, { message: "this👏is👏too👏big" }),
    date: z.string(),
});

export default function InputForm(props: { setIsOpen: Function }) {
    let todayDate = new Date().toISOString().slice(0, 10).split('/').reverse().join('-')

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            type: "Saving",
            title: "",
            amount: 10,
            date: todayDate,
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        props.setIsOpen(false)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mx-auto space-y-4">
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex justify-start">Type</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger id="type">
                                        <SelectValue placeholder="Select"  {...field} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="expense">Expense</SelectItem>
                                        <SelectItem value="savings">Savings</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex justify-start">Title</FormLabel>
                            <FormControl>
                                <div className="space-y-2">
                                    <Input id="title" placeholder="Enter title" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex justify-start">Amount</FormLabel>
                            <FormControl>
                                <Input
                                    id="amount"
                                    placeholder="Enter amount"
                                    type="number"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex justify-start">Date</FormLabel>
                            <FormControl>

                                <Input
                                    id="date"
                                    placeholder="Enter date"
                                    type="date"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
