import React, {useState} from 'react';
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

  const addTasks = (name: string) => {
    const newTasks: ITask[] = [...tasks, {name, done: false}];
    setTasks(newTasks);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
        <button>Guardar</button>
      </form>
      { tasks.map((task: ITask, i: number) => <h1 key={i}>{task.name}</h1>) }
    </>
  );
}

export default App;
