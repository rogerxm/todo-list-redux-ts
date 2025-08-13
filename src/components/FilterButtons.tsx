import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../store/store";
import { setFilter } from "../features/todos/todosSlice";

export const FilterButtons = () => {
  const dispatch = useDispatch();
  const options = ["all", "completed", "pending"];
  const { filter } = useSelector((state: RootState) => state.todos);

  const handleFilter = (filter: "all" | "completed" | "pending") => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex gap-2 mt-5 items-center">
      <p className="font-bold">Filter</p>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleFilter(option as any)}
          className={`${
            filter === option ? "bg-gray-300" : ""
          } cursor-pointer hover:bg-gray-300 px-2 py-1 transition-all rounded-3xl`}
        >
          {option.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  );
};
