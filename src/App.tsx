import { useState } from "react";
import TodoFom from "./components/TodoFom";
import ConatinerPending from "./components/ConatinerPending";
import ContainerDone from "./components/ContainerDone";

function App() {
  /* Manejador de Estados */
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [tareaPendiente, setTareaPendientes] = useState<string[]>([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState<string[]>(['ya tengo algo']);
  /* Funciones */

  const borrarTarea = () => {};

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") alert("Hubo un error vuelve a intentarlo");
    setTareaPendientes((tareasPrevias) => [...tareasPrevias, nuevaTarea]);
    setNuevaTarea("");
  };
  return (
    <>
      <header className="container">
        <h1 className="title">ToDo List!</h1>
      </header>
      <TodoFom add={agregarTarea} task={nuevaTarea} setTask={setNuevaTarea} />
      <div className="flex">
        <ConatinerPending taskPending={tareaPendiente} deleteTask={borrarTarea} />
        <ContainerDone taskDone={tareasFinalizadas} />
      </div>
    </>
  );
}

export default App;
