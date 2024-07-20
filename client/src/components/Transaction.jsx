import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// eslint-disable-next-line react/prop-types
const Transaction = ({transaction}) => {

    const  { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount <0 ? '-' : '+';
  return (
        <li className={sign == '-' ? 'minus': 'plus'}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() =>{
        // eslint-disable-next-line react/prop-types
        deleteTransaction(transaction.id)}} className="delete-btn">X</button>
      </li>
  )
}

export default Transaction
