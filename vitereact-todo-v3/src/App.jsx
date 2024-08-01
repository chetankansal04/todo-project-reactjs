import AppName from "./Components/Appname";
import EnterToDo from "./Components/EnterToDo";
import Tasks from "./Components/Tasks";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date: ${itemDueDate}`);

    const newTasks = [...tasks, { name: itemName, dueDate: itemDueDate }];

    setTasks(newTasks);
  };

  const handleDeleteTask = (itemName) => {
    const newTasks = tasks.filter((item) => item.name !== itemName);

    console.log(`item ${itemName} deleted`);
    setTasks(newTasks);
  };

  return (
    <center className="TODO React App">
      <AppName />
      <EnterToDo onNewItem={handleNewItem} />
      {tasks.length === 0 && <WelcomeMessage tasks={tasks}></WelcomeMessage>}
      <Tasks tasks={tasks} onDeleteClick={handleDeleteTask}></Tasks>
    </center>
  );
}

export default App;
