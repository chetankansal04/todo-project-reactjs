import Task from "./Task";
const Tasks = ({ tasks }) => {
  return (
    <div className="item-container">
      {tasks.map((task) => (
        <Task taskDate={task.dueDate} taskName={task.name}></Task>
      ))}
    </div>
  );
};
export default Tasks;
