import AppName from "./Appname";
import EnterToDo from "./Components/EnterToDo";
import Tasks from "./Components/Tasks";
import "./App.css";

function App() {
  const tasks = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "study",
      dueDate: "right now",
    },
  ];
  return (
    <center className="TODO React App">
      <AppName />
      <EnterToDo />
      <Tasks tasks={tasks}></Tasks>
    </center>
  );
}

export default App;
