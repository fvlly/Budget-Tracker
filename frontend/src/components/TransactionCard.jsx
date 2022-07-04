import React from 'react'

export const TransactionCard = ({description,amount}) => {
  return (
     <div className={`transaction-container ${amount> 0 ? 'income':'expense'}`}>
        <p>{description}</p>
        <p>{amount}</p>
     </div>

  )
}
