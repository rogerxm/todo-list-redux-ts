export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export interface TodosState {
  list: Todo[];
  filter: "all" | "completed" | "pending";
}
