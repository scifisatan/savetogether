import createClient from "./supabase/client"

const supabase = createClient()

export const postNewTransaction = async (data: any) => {

    let userID = (await supabase.auth.getUser()).data.user?.id

    let newData = { ...data, user: userID}
    console.log(newData)
    let { error } = await supabase.from('Transaction').insert(newData)
    if (error) {
        console.log(error)
    }
}