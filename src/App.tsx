import TodoFom from "./components/TodoFom";
import ConatinerPending from "./components/ConatinerPending";
import ContainerDone from "./components/ContainerDone";

function App() {
  return (
    <>
      <header className="container">
        <h1 className="title">ToDo List!</h1>
      </header>
      <TodoFom />
      <div className="flex">
        <ConatinerPending />
        <ContainerDone />
      </div>
    </>
  );
}

export default App;
