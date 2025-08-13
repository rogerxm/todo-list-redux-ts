import { useSelector } from "react-redux";
import { type RootState } from "../store/store";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { list, filter } = useSelector((state: RootState) => state.todos);

  const filteredTodos = list.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="mt-5">
        <p className="text-center text-xl">Nothing to show.</p>
      </div>
    );
  }

  return (
    <section className="mt-5">
      <ul className="flex flex-col gap-3">
        {filteredTodos.map((t) => (
          <TodoItem todo={t} key={t.id} />
        ))}
      </ul>
    </section>
  );
};
