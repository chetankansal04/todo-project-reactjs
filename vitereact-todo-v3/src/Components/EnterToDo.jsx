import { useState } from "react";

function EnterToDo({ onNewItem }) {
  const [taskName, setTaskName] = useState();
  const [DueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClick = () => {
    onNewItem(taskName, DueDate);
    setDueDate("");
    setTaskName("");
  };

  return (
    <div className="container text-center">
      <div className="row sub-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here" value={taskName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" value={DueDate} onChange={handleDateChange}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success sub-button"
            onClick={handleAddButtonClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterToDo;
