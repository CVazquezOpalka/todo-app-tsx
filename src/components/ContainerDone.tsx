import Tarea from "./Tarea";

type Props = {
  taskDone: string[];
};



const ContainerDone = ({ taskDone }: Props) => {
  return (
    <div className="container-list">
      {taskDone.length > 0 && <h1 style={{textAlign:"end"}}>ToDo realizadas</h1>}
      <ul className="container-done">
        {taskDone.map((e: string, index: number) => (
          <Tarea key={index} task={e} />
        ))}
      </ul>
    </div>
  );
};

export default ContainerDone;
