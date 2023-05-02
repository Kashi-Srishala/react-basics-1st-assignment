import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    };
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'></input>
                </div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );

};

export default ExpenseForm;