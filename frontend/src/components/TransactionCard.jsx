import React from 'react'

export const TransactionCard = ({description,amount}) => {
   const sign = amount > 0 ? '+' : '-'
  return (
     <div className={`transaction-container ${amount> 0 ? 'income':'expense'}`}>
        <p>{description}</p>
        <p>{sign}NGN{Math.abs(amount).toFixed(2)}</p>
     </div>

  )
}
