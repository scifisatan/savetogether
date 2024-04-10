
export type totalSaving = number

export type TransactionRecord = {
    "type": "Saving" | "Expense"
    "title": string,
    "amount": number
    "date": string
}

export type TransactionList = TransactionRecord[]

export const mockList: TransactionList = [
    {
        "type": "Saving",
        "title": "Salary",
        "amount": 1000,
        "date": "2022-01-01"
    },
    {
        "type": "Saving",
        "title": "Salary",
        "amount": 1000,
        "date": "2022-01-01"
    },
    {
        "type": "Expense",
        "title": "Rent",
        "amount": 500,
        "date": "2022-01-01"
    },
    {
        "type": "Expense",
        "title": "Rent",
        "amount": 500,
        "date": "2022-01-01"
    },
    {
        "type": "Saving",
        "title": "Salary",
        "amount": 1000,
        "date": "2022-01-01"
    },
]

export const totalSavings: totalSaving = 3000