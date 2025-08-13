import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type TodosState } from "../../types/todo";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

const initialState: TodosState = loadFromLocalStorage<TodosState>("todos") || {
  list: [],
  filter: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      });

      saveToLocalStorage(state);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveToLocalStorage(state);
    },
    setFilter: (
      state,
      action: PayloadAction<"all" | "completed" | "pending">
    ) => {
      state.filter = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, setFilter } =
  todosSlice.actions;
export default todosSlice.reducer;
