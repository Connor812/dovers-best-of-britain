import React, { createContext } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const url = "https://localhost/dovers-best-of-britain/";

    return (
        <DataContext.Provider value={{ url }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };