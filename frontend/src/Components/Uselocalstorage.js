import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(atob(storedValue)) : initialValue;

    const [value, setValue] = useState(initial);

    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, btoa(JSON.stringify(newValue)));
    };

    return [value, setStoredValue];
};

export default useLocalStorage;
