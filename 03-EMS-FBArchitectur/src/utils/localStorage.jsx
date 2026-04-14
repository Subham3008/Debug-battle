export const storage = {
  get: (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
