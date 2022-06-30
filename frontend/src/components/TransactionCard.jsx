import React from 'react'

export const TransactionCard = ({description,amount}) => {
  return (
     <div className="transaction-container">
        <p>{description}</p>
        <p>{amount}</p>
     </div>

  )
}
