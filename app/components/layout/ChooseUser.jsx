"use client";

// este import nos trae toda la lógica que hemos utilizado en este componente
import { useChoose } from "../logicElements/customHooks/useChoose";

import "../../globals.css";

export function ChooseUser({ toggleIsOpen, lockState }) {
  const { findUser, setName, name } = useChoose();

  // en esta función es donde damos funcionalidad al form, (event) es que se le pasara el evento a la función y .preventDefault() evita que la página se recarge
  // cuando ejecutamos el forms, buscamos el user y los datos del user que queremos ver
  const handleSubmit = (event) => {
    event.preventDefault();
    findUser(name); // para buscar el user
    toggleIsOpen(); // para renderizar DetailsUser
    lockState(); // para bloquear DetailsUser
  };

  return (
    <div className="boxChooseUser">
      {/* onSubmit es un atributo de forms, para decir que se hace cuando se presiona Enter en cualquier casillas, que en este caso es llamar al handleSubmit paa que no se recarge */}
      <form onSubmit={handleSubmit} className="boxChooseName">
        <label className="titleChoose">Introduce tu nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name"
        />
        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
    </div>
  );
}
