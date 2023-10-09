import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';

const NewExpenses = (props) => {
  const submitExpenseData = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseData} />
    </div>
  );
};

export default NewExpenses;
