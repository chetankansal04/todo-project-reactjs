import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function EnterToDo({ onNewItem }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTaskName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClick = () => {
    onNewItem(taskName, dueDate);
    setDueDate("");
    setTaskName("");
  };

  return (
    <div className="container text-center">
      <div className="row sub-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo Here"
            value={taskName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success sub-button"
            onClick={handleAddButtonClick}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterToDo;
