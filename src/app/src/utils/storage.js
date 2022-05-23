const set = (key, values) => localStorage.setItem(key, JSON.stringify(values));
const get = (key, defaultValue = null) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue
};

export { get, set };