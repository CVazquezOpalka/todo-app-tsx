type Props = {
  botones: boolean;
  task: string;
  deleteTask?: () => void;
  addDone?: () => void;
};

const Tarea = ({ task, deleteTask, addDone, botones }: Props) => {
  return (
    <li className="list-item">
      <span>{task}</span>
      <div className="button-container">
        {botones === true ? (
          <>
            <button className="btn-secondary" onClick={addDone}>Hecho</button>
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
