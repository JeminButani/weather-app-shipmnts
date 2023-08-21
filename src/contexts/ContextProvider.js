import React, { useState } from 'react'

const Context = React.createContext({})

const ContextProvider= ({ children } ) => {
    // const [searchValue, setSearchValue] = useState("Gandhinagar");
    // const [data, setData] = useState({});
    // const handleSearch = (value) => {
    //     setSearchValue(value);
    // };
    // const handleDataChange = (value) => {
    //     setData(value);
    // };
    
    var searchValue = "Gandhinagar";
    var data = {};
    return (
        <Context.Provider
            value={{
                searchValue: searchValue,
                data: data,
                // handleSearch,
                // handleDataChange
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

export const useStateContext = () => React.useContext(Context)
