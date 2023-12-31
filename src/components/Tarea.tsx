type Props = {
  botones: number;
  task: string;
  deleteTask: () => void;
};

const Tarea = ({ task, deleteTask, botones }: Props) => {
  return (
    <li className="list-item">
      <span>{task}</span>
      <div className="button-container">
        {botones === 2 ? (
          <>
            <button className="btn-danger" onClick={deleteTask}>
              Borrar
            </button>
            <button className="btn-secondary">Hecho</button>
          </>
        ) : (
          <>
            <button className="btn-danger" onClick={deleteTask}>
              Borrar
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Tarea;
