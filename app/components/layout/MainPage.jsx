"use client";

import { useState } from "react";

// importación de los componentes
import { UserOptions } from "../buttons/UserOptions";
import { CreateUser } from "./CreateUser";
import { ChooseUser } from "./ChooseUser";
import { DetailsUser } from "./DetailsUser";

// css realizado en _mainpage.scss
import "../../globals.css";

export function MainPage() {
  // a través del useState, traemos del UserOptions, el type, que luego servira para hacer visible el componente
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // con esta función ejecutamos el cambio dentro del useState
  const handleIsOpen = (value) => {
    setStatus(value);
  };

  return (
    <div className="boxMainPage">
      <section className="boxButton">
        <h1 className="titleMainPage">Bienvenido Padres</h1>
        {/* pasamos questionIsOpen, la función, al componente UserOptions, para poder capturar el tipo 'make' o 'options' para hacer visible el componente que nos interesa. */}
        <UserOptions questionIsOpen={handleIsOpen} />
        {/* en ambos className hacemos un operador ternario. Si el status esta vacio, sera solo su identificador, y si tiene algún type, será visible, el cual, hayamos invocado */}
        <div className={status === "make" ? "create make" : "create"}>
          <CreateUser />
        </div>
        <div className={status === "options" ? "choose options" : "choose"}>
          <ChooseUser
            toggleIsOpen={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          />
        </div>
      </section>
      {isOpen && <DetailsUser />}
    </div>
  );
}
