import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'
const ExpensesList=(props)=>{

        if(props.items.length===0){
            return <h2 className="expenses-list__fallback">Found no expense</h2>;
        }
    
 return (
 <ul className="expenses-list">
    {props.items.map((expense)=>(
        <ExpenseItem
        /*While adding new data our compiler will add the data to the very end of html tag
        //however we want newly added data at the beginning,so compiler will update every previous data
        //and thus reducing the efficiency therefore using key tag to give unique id to every data
        //which will help compiler to distinguish every data from each other*/   
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))}
</ul>
);
};
export default ExpensesList;