import { useTodo } from "../Context/TodoContext";
import Tarea from "./Tarea";

const ConatinerPending = () => {
  const { tareaPendiente, tareaCompleta } = useTodo();
  return (
    <div className="container-list">
      {tareaPendiente.length > 0 && <h1 className="title">ToDo Pendientes</h1>}
      <ul className="container-pending">
        {tareaPendiente.map((e: string, index: number) => (
          <Tarea
            key={index}
            task={e}
            addDone={() => tareaCompleta(index)}
            botones={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default ConatinerPending;
