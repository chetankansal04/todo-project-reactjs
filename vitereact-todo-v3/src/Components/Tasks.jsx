import Task from "./Task";
const Tasks = ({ tasks, onDeleteClick }) => {
  return (
    <div className="item-container">
      {tasks.map((task) => (
        <Task
          key={task.name}
          taskDate={task.dueDate}
          taskName={task.name}
          onDeleteClick={onDeleteClick}
        ></Task>
      ))}
    </div>
  );
};
export default Tasks;
