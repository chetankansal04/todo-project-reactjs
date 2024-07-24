function EnterToDo() {
  return (
    <div className="container text-center">
      <div className="row sub-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo Here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success sub-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterToDo;
