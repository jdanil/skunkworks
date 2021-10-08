import { useCallback, useEffect, useState } from "react";

const STORAGE_EVENT_TYPE = "storage";
const LOCAL_STORAGE_EVENT_TYPE = "local-storage";

// eslint-disable-next-line max-lines-per-function -- FIXME
export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): readonly [T, (value: T) => void] => {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as unknown as T) : initialValue;
    } catch (error: unknown) {
      // eslint-disable-next-line no-console -- we want to log to console here
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T): void => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window == "undefined") {
      // eslint-disable-next-line no-console -- we want to log to console here
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`,
      );
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue =
        value instanceof Function ? (value(storedValue) as T) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event(LOCAL_STORAGE_EVENT_TYPE));
    } catch (error: unknown) {
      // eslint-disable-next-line no-console -- we want to log to console here
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
  }, [readValue, setStoredValue]);

  useEffect(() => {
    const handleStorageChange = (): void => {
      setStoredValue(readValue());
    };

    // this only works for other documents, not the current one
    window.addEventListener(STORAGE_EVENT_TYPE, handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    window.addEventListener(LOCAL_STORAGE_EVENT_TYPE, handleStorageChange);

    return (): void => {
      window.removeEventListener(STORAGE_EVENT_TYPE, handleStorageChange);
      window.removeEventListener(LOCAL_STORAGE_EVENT_TYPE, handleStorageChange);
    };
  }, [readValue, setStoredValue]);

  return [storedValue, setValue];
};
