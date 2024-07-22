import AppName from "./Components/Appname";
import Detail from "./Components/EnterToDo";
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";
import "./App.css";

function App() {
  return (
    <center className="TODO React App">
      <AppName />
      <Detail />
      <div className="item-container">
        <Task1 />
        <Task2 />
      </div>
    </center>
  );
}

export default App;
