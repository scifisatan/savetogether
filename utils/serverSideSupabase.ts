
import { createClient } from './supabase/server';
import { TransactionRecord } from "./mockdata";

const supabase = createClient()

const getTransactions = async () => {
    let userID = (await supabase.auth.getUser()).data.user?.id
    let { data } = await supabase
        .from('Transaction')
        .select('*')
        .eq('user', userID)
  
    return data
}
const getTotalSaving = async () => {
    let userID = (await supabase.auth.getUser()).data.user?.id
    let { data } = await supabase.from('Transaction').select('*').eq('user', userID)

    let total = 0
    data?.forEach((transaction: TransactionRecord) => {
        transaction.type === 'Saving' ? total += transaction.amount : total -= transaction.amount
    })
    return total
}


export { getTotalSaving, getTransactions }