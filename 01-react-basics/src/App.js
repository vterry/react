import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 231.95,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'Dota BattlePass',
      amount: 999.99,
      date: new Date(2021, 3, 31),
    },
    {
      title: 'Pizzas',
      amount: 310.0,
      date: new Date(2021, 3, 31),
    },
    {
      title: 'Beverages',
      amount: 999.99,
      date: new Date(2021, 3, 31),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
