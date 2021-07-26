import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance size="small" title="Your Balance" value="25555.00" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$1000.00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20",
    isExpense: true,
  },
  {
    description: "Rent",
    value: "$30",
    isExpense: true,
  },
  {
    id: 3,
    description: "Power bill",
    value: "$50",
    isExpense: true,
  },
];
