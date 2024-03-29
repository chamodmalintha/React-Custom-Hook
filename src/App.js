import "./App.css";
import { ItemList } from "./components/ItemList";
import { Child } from "./components/Child";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <Parent>
        <Child />
      </Parent>
      <ItemList />
    </div>
  );
}

export default App;
