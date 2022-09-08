import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
  const [contextDataGlobal, setContextDataGlobal] = useState({
    backgroundColor: '#020202',
  });

  return <GlobalContext.Provider value={{ contextDataGlobal, setContextDataGlobal }}>{props.children}</GlobalContext.Provider>;
};
export default GlobalContextProvider;
