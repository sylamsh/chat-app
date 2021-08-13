import { useEffect, useState } from 'react';

const PREFIX = 'chat-app-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) 
        return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
    return ()=>{
        localStorage.removeItem(prefixedKey, JSON.stringify(value));
        // completely my-code need to attend this incase of any localStorage issues
        // without this if you restart the several times a 'cross-origin-error' will occur
        // which is caused by multiple instances of same key

        //There is still some issue of reloading without a set id will cause the same error
    }
    // value !== undefined && localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}