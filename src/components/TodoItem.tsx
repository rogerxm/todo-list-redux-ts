import { useDispatch } from "react-redux";
import type { Todo } from "../types/todo";
import { deleteTodo, toggleTodo } from "../features/todos/todosSlice";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const statusClasses = todo.completed
    ? "bg-green-100 border-green-500 text-green-700"
    : "bg-yellow-100 border-yellow-500 text-yellow-700";

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <li className="p-3 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">{todo.text}</p>
        <div className="flex gap-2">
          <button
            onClick={() => handleDelete(todo.id)}
            className="cursor-pointer"
          >
            ❌
          </button>
          <button
            onClick={() => handleToggle(todo.id)}
            className="cursor-pointer"
          >
            {todo.completed ? "⏳" : "✅"}
          </button>
        </div>
      </div>
      <p
        className={`mt-2 px-3 py-1 border-2 rounded-full text-sm font-semibold inline-block ${statusClasses}`}
      >
        {todo.completed ? "Completed" : "Pending"}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        <span className="font-bold">Created:</span>{" "}
        {new Date(todo.createdAt).toLocaleString()}
      </p>
    </li>
  );
};
