import './App.css'

const ItensDaLista = () => {
  return (
  <ul className="nav nav-pills todo-nav">
    <li role="presentation" className="nav-item all-task active">
      <a href="#" className="nav-link">All</a>
    </li>
    <li role="presentation" className="nav-item active-task">
      <a href="#" className="nav-link">Active</a>
    </li>
    <li role="presentation" className="nav-item completed-task">
      <a href="#" className="nav-link">Completed</a>
    </li>
  </ul>
  )
}

const BarraPesquisa = () => {
  return (
    <form action="javascript:void(0);">
    <input
      type="text"
      className="form-control add-task"
      placeholder="New Task..." />
  </form>
  )
}

const ListaToDo = () => {
  let lista = [
    "Create theme",
    "Work on wordpress",
    "Organize office main department",
    "Error solve in HTML template"
  ];
  return (
    <>
    {lista.map((nome, index) => 
    <div className="todo-item">
    <div className="checker">
      <span><input type="checkbox" /></span>
    </div>
    <span> {nome}</span>
    <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
    </div>
    )}
    </>
  )
}

function App() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <BarraPesquisa/>
              <ItensDaLista/>
              <div className="todo-list">
              <ListaToDo/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
