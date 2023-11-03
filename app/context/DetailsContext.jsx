//import { useState } from "react";
import { context, useContext, useState } from "react";

const DetailsContext = ({ children }) => {
  const [dataUser, setDataUser] = useState();

  console.log(dataUser, "context");

  return (
    <context.Provider value={{ setDataUser }}>{children}</context.Provider>
  );
};
