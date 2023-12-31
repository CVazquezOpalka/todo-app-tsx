import Tarea from "./Tarea";
type Props = {
  taskPending: string[];
  completedTask: (index: number) => void;
};

const ConatinerPending = ({ taskPending, completedTask }: Props) => {
  return (
    <div className="container-list">
      {taskPending.length > 0 && <h1 className="title">ToDo Pendientes</h1>}
      <ul className="container-pending">
        {taskPending.map((e: string, index: number) => (
          <Tarea
            key={index}
            task={e}
            addDone={() => completedTask(index)}
            botones={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default ConatinerPending;
