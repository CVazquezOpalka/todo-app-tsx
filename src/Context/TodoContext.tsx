import { createContext, useContext, useState } from "react";

type TodoContextType = {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setNuevaTarea: React.Dispatch<React.SetStateAction<string>>;
  nuevaTarea: string;
  tareaPendiente: string[];
  setTareaPendientes: React.Dispatch<React.SetStateAction<string[]>>;
  tareasFinalizadas: string[];
  setTareasFinalizadas: React.Dispatch<React.SetStateAction<string[]>>;
  borrarTarea: (index: number) => void;
  agregarTarea: () => void;
  tareaCompleta: (index: number) => void;
};
type ContextProviderProps = {
  children: React.ReactNode;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo debe ser utilizado dentro de un TodoProvider");
  }
  return context;
};
export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const todoPendiente: string[] = JSON.parse(
    localStorage.getItem("todoPendiente") || "[]"
  );
  const todoFinalizada: string[] = JSON.parse(
    localStorage.getItem("todoFinalizada") || "[]"
  );
  /* Manejador de Estados */
  const [error, setError] = useState<boolean>(false);
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [tareaPendiente, setTareaPendientes] =
    useState<string[]>(todoPendiente);
  const [tareasFinalizadas, setTareasFinalizadas] =
    useState<string[]>(todoFinalizada);
  /* Funciones */
  const borrarTarea = (index: number) => {
    let borrarTarea = tareasFinalizadas.filter((_, i) => i !== index);
    localStorage.setItem("todoFinalizada", JSON.stringify(borrarTarea));
    setTareasFinalizadas(borrarTarea);
  };
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") {
      setError(true);
      return;
    }
    setTareaPendientes((tareasPrevias) => {
      const nuevasTareas = [...tareasPrevias, nuevaTarea];
      localStorage.setItem("todoPendiente", JSON.stringify(nuevasTareas));
      return nuevasTareas;
    });
    setNuevaTarea("");
  };
  const tareaCompleta = (index: number) => {
    const encontrarTarea = tareaPendiente
      .filter((_, i) => i === index)
      .join("");
    setTareasFinalizadas((tareasPrevias) => {
      let nuevaTarea = [...tareasPrevias, encontrarTarea];
      localStorage.setItem("todoFinalizada", JSON.stringify(nuevaTarea));
      return nuevaTarea;
    });
    setTareaPendientes((tareasPrevias) => {
      let borrarTarea = tareasPrevias.filter((_, i) => i !== index);
      localStorage.setItem("todoPendiente", JSON.stringify(borrarTarea));
      return borrarTarea;
    });
  };

  return (
    <TodoContext.Provider
      value={{
        error,
        setError,
        setNuevaTarea,
        nuevaTarea,
        tareaPendiente,
        setTareaPendientes,
        tareasFinalizadas,
        setTareasFinalizadas,
        borrarTarea,
        agregarTarea,
        tareaCompleta,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
