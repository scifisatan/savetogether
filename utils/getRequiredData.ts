
import { TransactionRecord, mockList, totalSavings } from "./mockdata"

const getTransactions = () => {
    return mockList
}
const getTotalSaving = () => {
    return totalSavings
}

const postNewTransaction = (data: TransactionRecord) => {
    console.log(data)
}
export { getTotalSaving, getTransactions, postNewTransaction }