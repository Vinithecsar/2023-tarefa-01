import './App.css'

const ItensDaLista = () => {
  let lista = [
    {
      titulo: "All",
      classname: "all-task active"
    },
    {
      titulo: "Active",
      classname: "active-task"
    },
    {
      titulo: "Completed",
      classname: "completed,task"
    }
  ]

  return (
    <>
      {lista.map((lista, index) =>
        <li role="presentation" className={`nav-item ${lista.classname}`}>
          <a href="#" className="nav-link">{lista.titulo}</a>
        </li>
      )}
    </>
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
                <BarraPesquisa />
                <ul className="nav nav-pills todo-nav">
                  <ItensDaLista />
                </ul>
                <div className="todo-list">
                  <ListaToDo />
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
