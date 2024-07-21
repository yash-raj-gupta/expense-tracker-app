import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import { MdDelete } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const Transaction = ({transaction}) => {

    const  { deleteTransaction } = useContext(GlobalContext);
    

    const sign = transaction.amount <0 ? '-' : '+';
  return (
        <li className={` w-[97%]   ${sign === '-' ? 'minus' : 'plus'}`}>
    {transaction.text} <span>{sign}&#8377;{numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() =>{
        // eslint-disable-next-line react/prop-types

        // eslint-disable-next-line react/prop-types
        deleteTransaction(transaction._id)}} className=""><MdDelete className=" w-5 h-6 text-[#c0392b]"/></button>
      </li>
  )
}

export default Transaction
