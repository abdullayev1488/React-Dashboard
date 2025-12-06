export const saveToLocal = ({ key, value }) => localStorage.setItem(key, JSON.stringify(value));
export const getFromLocal = (({ key }) => {
    const data = localStorage.getItem(key)
    if (data && data !== 'undefined') return (JSON.parse(localStorage.getItem(key)))
});