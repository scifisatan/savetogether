

import createClient from '@/utils/supabase/client';
import { TransactionRecord, totalSavings } from "./mockdata"
import { number } from 'zod';

const supabase = createClient()

const getUserID = async () => {
    let user = await supabase.auth.getUser()
    let id = user?.data.user?.id
    let intID = Number(id)
    console.log(intID)
    return intID
}

const getTransactions = async () => {

    let { data } = await supabase
        .from('Transaction')
        .select('*')
    // .eq('id', await getUserID())

    return data
}
const getTotalSaving = async () => {
    let { data } = await supabase.from('Transaction').select('*')

    let total = 0
    data?.forEach((transaction: TransactionRecord) => {
        transaction.type === 'Saving' ? total += transaction.amount : total -= transaction.amount
    })
    return total
}

const postNewTransaction = async (data: TransactionRecord) => {
    console.log(data)
    let newData = { ...data, id: await getUserID() }
    console.log(newData)
    let { error } = await supabase.from('Transaction').insert(newData)

    return error
}
export { getTotalSaving, getTransactions, postNewTransaction }