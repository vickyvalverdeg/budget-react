import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";
import { createStore } from 'redux'

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(()=> {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(()=> {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map((entry) => {
      if(entry.isExpense){
        return (totalExpenses += Number(entry.value))
      } else {
        return (totalIncomes += Number(entry.value))
      }
    })
    setTotal(totalIncomes - totalExpenses)
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncomes)
  }, [entries])

  const store = createStore((state = initialEntries, action) => {
    console.log("action", action)
    switch(action.type){
      case 'ADD_ENTRY':
        const newEntries = entries.concat({...action.payload})
        return newEntries
      default:
        return state
    }
  })

  console.log("store before ",store.getState())
  const payload = {
    id:5,
    description: 'Hello from Redux',
    value: 100,
    isExpense: false
  }
  store.dispatch({ type: 'ADD_ENTRY', payload})
  console.log("store after ",store.getState())

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry()
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id)
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance size="small" title="Your Balance" value={total} />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true,
  },
  {
    description: "Rent",
    value: 30.00,
    isExpense: true,
  },
  {
    id: 3,
    description: "Power bill",
    value: 50.00,
    isExpense: true,
  },
];
