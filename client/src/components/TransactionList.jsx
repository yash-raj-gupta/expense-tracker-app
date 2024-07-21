import { useContext, useEffect } from "react"

import { GlobalContext } from "../context/GlobalState"
import Transaction from "./Transaction"
const TransactionList = () => {

  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  transactions.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className=" ">
        <h3>History</h3>
        {transactions.length === 0 ? <p className="text-center justify-center flex flex-col h-[38vh] font-semibold">No Transactions done yet!</p>:
        <ul  className="list h-[38vh]  w-full  overflow-y-auto scroller  ">
            {transactions?.map((transaction,index) => (
              <Transaction key={index} transaction={transaction}/>
            ))}

        </ul>
}
      
    </div>
  )
}

export default TransactionList
