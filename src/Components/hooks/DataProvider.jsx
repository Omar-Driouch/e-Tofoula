import React, { createContext, useState } from "react";

// Create a context
const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Define your data state
  const [data, setData] = useState(/* Initial data */);

  // Function to update data
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
