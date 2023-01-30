export const getFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.getItem(key);
  }
};
