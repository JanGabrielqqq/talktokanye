import React, { useState } from "react";

export const Context = React.createContext({
  contentData: [],
  httpRequest: "",
  setContentDataHandler: () => {},
  setContentDataHttp: () => {},
});

export const ContextProvider = (props) => {
  const [contentData, setContentData] = useState([]);

  const setContentDataHandler = (data) => {
    setContentData((prevState) => {
      return [...prevState, data];
    });
  };

  const setContentDataHttp = (data) => {
    setContentData((prevState) => {
      return [...prevState, data];
    });
  };

  const context = {
    contentData: contentData,
    setContentDataHandler: setContentDataHandler,
    setContentDataHttp: setContentDataHttp,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
