/* 
** useStrage.js
*/
import { useCallback } from 'react';

export const useStrage = () => {
  // Context
  // hooks
  // State
  // function
  const getStrage = useCallback((key) =>{
    const jsonData = localStorage.getItem([key]);
    const data = JSON.parse(jsonData);
    return data;
  },[])
  const setStrage = useCallback((key, data) =>{
    const jsonData = JSON.stringify(data);
    localStorage.setItem([key], jsonData);
  },[])
  const clearStrage = useCallback((key) =>{
    localStorage.clear([key]);
  },[])
  return { setStrage, getStrage, clearStrage }
};