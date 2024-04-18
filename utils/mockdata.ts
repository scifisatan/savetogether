import { UUID } from "crypto"

export type totalSaving = number

export type TransactionRecord = {
    "type": "Saving" | "Expense"
    "title": string,
    "amount": number
    "date": string
    "id": UUID
}

export type TransactionList = TransactionRecord[]


