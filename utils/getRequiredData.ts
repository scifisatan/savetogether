import { mockExpenseList, mockSavingList, totalSaving } from "./mockdata"

const getTotalSaving = () => {
    return totalSaving
}

const getSavings = () => {
    return mockSavingList
}

const getExpenses = () => {
    return mockExpenseList
}

export { getTotalSaving, getExpenses, getSavings }