import React, {useState} from 'react';
import 'bootswatch/dist/lumen/bootstrap.min.css';
 //React esto es un form event y esto viene por parte de un elemento de html for element
type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string,
  done: boolean
}


function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTasks(newTask);
    setNewTask("");
  }

  const addTasks = (name: string): void => {
    if(!name) return alert("debe ingresa una tarea")
    const newTasks: ITask[] = [...tasks, {name, done: false}];
    setTasks(newTasks);
  }

  const toggleDoneTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  }

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  onChange={(e) => setNewTask(e.target.value)} 
                  value={newTask} 
                  className="form-control"
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">Guardar</button>
              </form>
            </div>
          </div>      
          { 
            tasks.map((task: ITask, i: number) => (
              <div key={i} className="card card-body mt-2">
                <h2 style={{textDecoration: task.done ? 'line-through' : ''}}>
                  {task.name}
                </h2>
                <div>
                  <button className="btn btn-secondary" onClick={()=> toggleDoneTask(i)}> 
                    { task.done ? '✗' : '✓' }
                  </button>
                  <button className="btn btn-danger" onClick={() => removeTask(i)}>
                    🗑
                  </button>
                </div>
              </div>              
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
