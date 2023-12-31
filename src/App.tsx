import TodoFom from "./components/TodoFom";
import ConatinerPending from "./components/ConatinerPending";
import ContainerDone from "./components/ContainerDone";
import { useTodo } from "./Context/TodoContext";

function App() {

  const {
    error,
    nuevaTarea,
    setNuevaTarea,
    tareaPendiente,
    tareasFinalizadas,
    borrarTarea,
    agregarTarea,
    tareaCompleta,
  } = useTodo();
  /* Manejador de Estados */

  return (
    <>
      <header className="container">
        <h1 className="title">ToDo List!</h1>
      </header>
      <TodoFom
        add={agregarTarea}
        task={nuevaTarea}
        setTask={setNuevaTarea}
        error={error}
      />
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
