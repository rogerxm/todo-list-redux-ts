export const saveToLocalStorage = (state: unknown) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

export const loadFromLocalStorage = <T>(key: string): T | undefined => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
};
