import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [inputTitle, setTitle] = useState('');
  const [inputAmount, setAmount] = useState('');
  const [inputDate, setDate] = useState('');

  const titleChangeHanlder = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHanlder = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHanlder = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSubmitExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHanlder} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHanlder}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2024-12-31"
            value={inputDate}
            onChange={dateChangeHanlder}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
