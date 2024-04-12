'use server'

import { createClient } from '@/utils/supabase/server';
import { TransactionRecord, mockList, totalSavings } from "./mockdata"

const supabase = createClient()
const getTransactions = async () => {

    let { data, error } = await supabase
        .from('Transaction')
        .select('*')

    console.log(data, error)
    return data
}
const getTotalSaving = async () => {
    let { data, error } = await supabase.from('Transaction').select('*')

    let total = 0
    data?.forEach((transaction: TransactionRecord) => {
        transaction.type === 'Saving' ? total += transaction.amount : total -= transaction.amount
    })
    return total
}

const postNewTransaction = async (data: TransactionRecord) => {
    let { error } = await supabase.from('Transaction').insert(data)
    console.log(error)
    return error
}
export { getTotalSaving, getTransactions, postNewTransaction }