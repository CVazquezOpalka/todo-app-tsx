import { useTodo } from "../Context/TodoContext";



const TodoFom = () => {
  const {error, setNuevaTarea, agregarTarea, nuevaTarea, setError } = useTodo()
  
  return (
    <div className="container input-flex">
      <input
        className={error ? "inputs danger" : "inputs"}
        type="text"
        placeholder={error ? "Debes Ingresar una tarea" : "Ingresa una tarea"}
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        onFocus={()=> setError(false)}
      />
      <button className="btn-primary" onClick={agregarTarea}>
        Crear
      </button>
    </div>
  );
};

export default TodoFom;
