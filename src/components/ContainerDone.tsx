import { useTodo } from "../Context/TodoContext";
import Tarea from "./Tarea";

const ContainerDone = () => {
  const { borrarTarea, tareasFinalizadas } = useTodo();
  return (
    <div className="container-list">
      {tareasFinalizadas.length > 0 && (
        <h1 style={{ textAlign: "end" }}>ToDo realizadas</h1>
      )}
      <ul className="container-done">
        {tareasFinalizadas.map((e: string, index: number) => (
          <Tarea
            key={index}
            task={e}
            deleteTask={() => borrarTarea(index)}
            botones={false}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContainerDone;
