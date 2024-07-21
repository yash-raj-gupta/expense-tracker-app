import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import { GlobalProvider } from './context/GlobalState'


// import GlobalProvider from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
    <Header/>
    <div className="container w-[100vw] flex flex-row gap-[20%] justify-center">
      <div className=" w-[35%] ">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      </div>
      <div className=" w-[30%] flex flex-col justify-center">

      <AddTransaction/>
      </div>
      
    </div>
    </GlobalProvider>
  )
}

export default App
