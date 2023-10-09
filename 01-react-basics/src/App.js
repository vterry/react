import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

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

  const updateExpenses = (expense) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpenses onAddExpense={updateExpenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
