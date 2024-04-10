import React from 'react'
import AmountCard from './AmountCard'
import TransactionView from './TransactionView'
import AddTransactionDrawer from './AddTransactionDrawer'

const appRoot = () => {
  return (
    <>
      <AmountCard />
      <TransactionView />
      <AddTransactionDrawer/>
    </>
  )
}

export default appRoot