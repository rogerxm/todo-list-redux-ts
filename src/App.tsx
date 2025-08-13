import { FilterButtons } from "./components/FilterButtons";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen">
        <div className="my-0 max-w-md md:max-w-lg lg:max-w-2xl mx-auto py-10 px-10 bg-gray-200 rounded-3xl shadow-lg">
          <h1 className="text-start font-bold text-3xl mb-6">To-Do List 📝</h1>
          <TodoForm />
          <FilterButtons />
          <TodoList />
        </div>
      </main>
    </>
  );
}

export default App;
