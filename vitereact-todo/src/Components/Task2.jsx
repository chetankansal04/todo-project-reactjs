function Task2() {
  let todoName = "Go to College";
  let todoDate = "4/10/2023";
  return (
    <div className="container">
      <div className="row sub-row">
        <div className="col-6 task">{todoName}</div>
        <div className="col-4 task">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sub-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task2;
