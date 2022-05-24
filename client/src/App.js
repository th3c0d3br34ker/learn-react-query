
import { ReactQueryDevtools } from "react-query/devtools";

import TodoItems from "components/TodoItems";
import AddTodo from "components/AddTodo";

function App() {
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-xl text-black">Todo List</h1>
            <AddTodo />
          </div>

          <TodoItems />
        </div>
      </div>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
