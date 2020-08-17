import React, {useState, Fragment, FormEvent} from 'react';

 //React esto es un form event y esto viene por parte de un elemento de html for element
type FormElement = React.FormEvent<HTMLFormElement>;


function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>("");
  
  return (
    <>
      <form>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default App;
