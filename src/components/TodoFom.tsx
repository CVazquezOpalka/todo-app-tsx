type Props = {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  add: () => void;
  error: boolean;
};

const TodoFom = (props: Props) => {
  const { task, setTask, add, error } = props;
  return (
    <div className="container input-flex">
      <input
        className={error ? "danger" : ""}
        type="text"
        placeholder="Ingresa tu tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn-primary" onClick={add}>
        Crear
      </button>
    </div>
  );
};

export default TodoFom;
