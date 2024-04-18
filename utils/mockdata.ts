import { UUID } from "crypto"

export type totalSaving = number

export type TransactionRecord = {
    "type": "Saving" | "Expense"
    "title": string,
    "amount": number
    "date": string
    "id" : number
}

export type TransactionList = TransactionRecord[]


export const totalSavings: totalSaving = 3000