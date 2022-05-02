import logo from "./logo.svg";
import "./App.css";
import Company from "./Screens/CompanyName/Company";
import SayMyName from "./Screens/SayMyName/SayMyName";
import { Count } from "./Screens/Count/Count";
import { PropsF } from "./Screens/PropsF/PropsF";

function App() {
  return (
    <div className="App">
      <Company name="Thoughtwin" />
      <SayMyName />
      <Count />
      <PropsF name1="Infosys" />
    </div>
  );
}

export default App;
