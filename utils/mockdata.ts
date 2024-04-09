export type saving = {
    amount: number,
    date: string
}
export type expense = {
    name: string,
    amount: number,
    date: string
}
export type savingList = saving[]
export type expenseList = expense[]

const mockExpense: expense = {
    "name": "Sushila Shrestha",
    "amount": 100,
    "date": "2020-10-11 11:11:!1"
}


const mockSaving = {
    "amount": 100,
    "date": "2020-10-11 11:11:11"
}

const totalSaving: number = 960

const mockSavingList: savingList = [
    {
        "amount": 100,
        "date": "2020-10-11 11:11:11"
    },
    {
        "amount": 100,
        "date": "2020-10-11 11:11:11"
    },
    {
        "amount": 100,
        "date": "2020-10-11 11:11:11"
    },
    {
        "amount": 100,
        "date": "2020-10-11 11:11:11"
    }
]


const mockExpenseList: expenseList = [
    {
        "name": "Sushila Shrestha",
        "amount": 100,
        "date": "2020-10-11 11:11:!1"
    },
    {
        "name": "Sushila Shrestha",
        "amount": 100,
        "date": "2020-10-11 11:11:!1"
    },
    {
        "name": "Sushila Shrestha",
        "amount": 100,
        "date": "2020-10-11 11:11:!1"
    },
    {
        "name": "Sushila Shrestha",
        "amount": 100,
        "date": "2020-10-11 11:11:!1"
    }
]

export {totalSaving, mockExpense, mockSaving, mockSavingList, mockExpenseList}