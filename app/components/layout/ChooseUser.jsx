"use client";

import { useChoose } from "../logicElements/customHooks/useChoose";

export function ChooseUser() {
  const { findUser, setName, name } = useChoose();

  // en esta función es donde damos funcionalidad al form, (event) es que se le pasara el evento a la función y .preventDefault() evita que la página se recarge
  // cuando ejecutamos el forms, buscamos el user y los datos del user que queremos ver
  const handleSubmit = (event) => {
    event.preventDefault();
    findUser(name);
  };

  return (
    <div className="boxChooseUser">
      {/* onSubmit es un atributo de forms, para decir que se hace cuando se presiona Enter en cualquier casillas, que en este caso es llamar al handleSubmit paa que no se recarge */}
      <form onSubmit={handleSubmit}>
        <label>
          Introduce tu nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
