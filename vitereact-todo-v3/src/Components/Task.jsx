function Task({ taskName, taskDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row sub-row">
        <div className="col-6 task">{taskName}</div>
        <div className="col-4 task">{taskDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger sub-button"
            onClick={() => {
              onDeleteClick(taskName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
