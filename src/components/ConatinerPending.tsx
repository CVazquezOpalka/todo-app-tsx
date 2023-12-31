import Tarea from "./Tarea";
type Props = {
  taskPending: string[];
  deleteTask: (index: number) => void;
};

const ConatinerPending = ({ taskPending, deleteTask }: Props) => {
  return (
    <div className="container-list">
      {taskPending.length > 0 && <h1 className="title">ToDo Pendientes</h1>}
      <ul className="container-pending">
        {taskPending.map((e: string, index: number) => (
          <Tarea key={index} task={e} deleteTask={()=>deleteTask(index)} botones={2} />
        ))}
      </ul>
    </div>
  );
};

export default ConatinerPending;
