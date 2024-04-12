"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { postNewTransaction } from "@/utils/getRequiredData";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  amount: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gt(0, "Must be greater than 0")
  ),

  date: z.string(),
});

export default function InputForm(props: { setIsOpen: Function }) {
  let todayDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split("/")
    .reverse()
    .join("-");

  let todayDay = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: todayDay,
      date: todayDate,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    postNewTransaction(data);
    toast({
      title: "Transaction has been added 😊",
      duration: 1500,
    });
    window.location.reload();
    props.setIsOpen(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto space-y-4"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="flex justify-start">Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select the type"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Expense">Expense</SelectItem>
                      <SelectItem value="Saving">Saving</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-start">Title</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <Input
                    id="title"
                    placeholder="Enter title"
                    required
                    {...field}
                  />
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
                  required
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
        <Button className="w-full my-2" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
