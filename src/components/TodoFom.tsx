type Props = {
  task: string;
  setTask: any;
  add: ()=>void;
};

const TodoFom = (props: Props) => {
  const { task, setTask, add } = props;
  return (
    <div className="container input-flex">
      <input
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
