import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
import { numberWithCommas } from "../utils/format";

const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions?.map(transaction => transaction.amount);

  const income = numberWithCommas(amounts?.filter(item => item > 0).reduce((acc, item) => (acc+=item),0).toFixed(2));

  const expense = numberWithCommas(amounts?.filter(item => item < 0).reduce((acc, item) => (acc-=item),0).toFixed(2));
  return (
    <div className="inc-exp-container ">
      <div className="">
        <h4>Income </h4>

        <p  className="money plus">+&#8377;{income}</p>
      </div>
      <div className="">
        <h4>Expenses</h4>
        <p className="money minus">-&#8377;{(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
