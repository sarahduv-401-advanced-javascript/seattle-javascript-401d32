import { useState, useCallback } from 'react';

const useArray = (initialArray = []) => {
  const [array, setArray] = useState(initialArray);

  return {
    array: array,
    setArray: setArray
    removeByIndex: useCallback(idx => {
      setArray(arr => {
        const copy = arr.slice();
        arr.splice(idx, 1);
        return copy;
      })
    }, [])
    removeById: useCallback(id => {
      setArray(arr => {
        return arr.filter(item => item.id !== id);
      })
    }, []),
    add: useCallback(val => setArray(arr => [...arr, val]), []),
    clear: useCallback(() => setArray(() => []), [])
  }
}

export default useArray;