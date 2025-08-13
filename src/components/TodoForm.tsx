import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

export const TodoForm = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!task) return;

    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <section className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-1 justify-center w-full mx-auto">
          <input
            type="text"
            placeholder="ADD YOUR TASK"
            className="border-none bg-gray-300 placeholder:text-gray-500 rounded-3xl py-2 px-4 w-full pr-20"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-3xl py-2 px-4 bg-orange-400 text-white cursor-pointer hover:bg-orange-500 transition-all"
          >
            ADD
          </button>
        </div>
      </form>
    </section>
  );
};
