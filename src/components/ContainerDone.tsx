import Tarea from "./Tarea";

type Props = {
  taskDone: string[];
  deleteTask: (index: number) => void;
};

const ContainerDone = ({ taskDone, deleteTask }: Props) => {
  return (
    <div className="container-list">
      {taskDone.length > 0 && (
        <h1 style={{ textAlign: "end" }}>ToDo realizadas</h1>
      )}
      <ul className="container-done">
        {taskDone.map((e: string, index: number) => (
          <Tarea key={index} task={e} deleteTask={() => deleteTask(index)} botones={false} />
        ))}
      </ul>
    </div>
  );
};

export default ContainerDone;
