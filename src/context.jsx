import { createContext, useContext, useState } from "react";
import { intialState } from "./App.jsx";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [value, setVlaue] = useState(intialState);
  let [newId, setNewId] = useState(4);
  const updateValue = (newValue) => {
    setVlaue(newValue);
  };

  const addValue = (newValue) => {
    setNewId(++newId);
    newValue = { ...newValue, id: newId };
    setVlaue([...value, newValue]);
  };

  return (
    <GlobalContext.Provider value={{ value, updateValue, addValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;
