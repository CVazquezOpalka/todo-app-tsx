import { useState } from "react";
import TodoFom from "./components/TodoFom";
import ConatinerPending from "./components/ConatinerPending";
import ContainerDone from "./components/ContainerDone";
/* Para finalizar este experimento, vamos a agregar LocalStorage, y contex api */
function App() {
  /* Manejador de Estados */
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [tareaPendiente, setTareaPendientes] = useState<string[]>([]);
  const [tareasFinalizadas, setTareasFinalizadas] = useState<string[]>([]);
  /* Funciones */
  const borrarTarea = (index: number) => {
    let borrarTarea = tareasFinalizadas.filter((_, i) => i !== index);
    setTareasFinalizadas(borrarTarea);
  };
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") {
      alert("Hubo un error vuelve a intentarlo");
      return;
    }
    setTareaPendientes((tareasPrevias) => [...tareasPrevias, nuevaTarea]);
    setNuevaTarea("");
  };
  const tareaCompleta = (index: number) => {
    const encontrarTarea = tareaPendiente
      .filter((_, i) => i === index)
      .join("");
    setTareasFinalizadas((tareasPrevias) => [...tareasPrevias, encontrarTarea]);
    setTareaPendientes((tareasPrevias) =>
      tareasPrevias.filter((_, i) => i !== index)
    );
  };
  return (
    <>
      <header className="container">
        <h1 className="title">ToDo List!</h1>
      </header>
      <TodoFom add={agregarTarea} task={nuevaTarea} setTask={setNuevaTarea} />
      <div className="flex">
        <ConatinerPending
          taskPending={tareaPendiente}
          completedTask={tareaCompleta}
        />
        <ContainerDone taskDone={tareasFinalizadas} deleteTask={borrarTarea} />
      </div>
    </>
  );
}

export default App;
