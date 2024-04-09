
export type totalSaving = number

export type TransactionRecord = {
    "type": "saving" | "expense"
    "title": string,
    "amount": number
    "date": string
}

export type TransactionList = TransactionRecord[]

export const mockList: TransactionList = [
    {
        "type": "saving",
        "title": "Salary",
        "amount": 1000,
        "date": "2022-01-01"
    },
    {
        "type": "saving",
        "title": "Salary",
        "amount": 1000,
        "date": "2022-01-01"
    },
    {
        "type": "expense",
        "title": "Rent",
        "amount": 500,
        "date": "2022-01-01"
    },
    {
        "type": "expense",
        "title": "Rent",
        "amount": 500,
        "date": "2022-01-01"
    },
    {
        "type": "saving",
        "title": "Salary",
        "amount": 1000,
        "date": "2022-01-01"
    },
]

export const totalSavings: totalSaving = 3000