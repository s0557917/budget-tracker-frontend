import Card from "./Card"
import { useEffect, useState } from "react"
import { getNumberColorByValue, formatCurrency } from "../../helpers/formatting-helpers";

export default function OverviewCards({ data }) {

    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    useEffect(() => {
        const newBalance = data.reduce((accumulator, currValue) =>
            accumulator + currValue.amount
        , 0)
        setBalance(formatCurrency(newBalance))

        const income = data.reduce((accumulator, currValue) => {
            return currValue.amount > 0 ? accumulator + currValue.amount : accumulator
        }, 0)
        setIncome(formatCurrency(income))

        const expenses = data.reduce((accumulator, currValue) => {
            return currValue.amount < 0 ? accumulator + (currValue.amount * -1) : accumulator
        }, 0)
        setExpenses(formatCurrency(expenses))

    }, [data])
    
    return( 
        <div className="w-1/3 h-96 m-2 flex flex-col rounded-md p-7 justify-around text-right">
            <Card>
                <p className="text-4xl font-thin">Current Balance</p>
                <p className={`text-6xl font-bold ${getNumberColorByValue(balance)}`}>{balance}</p>
            </Card>
            <div className="flex justify-between">
                <Card>
                    <p className="text-2xl font-thin">Income</p>
                    <p className="text-4xl font-bold text-green-600">{income}</p>
                </Card>
                <Card>
                    <p className="text-2xl font-thin">Expenses</p>
                    <p className="text-4xl font-bold text-red-600">{expenses}</p>
                </Card>
            </div>
        </div>
    )
}