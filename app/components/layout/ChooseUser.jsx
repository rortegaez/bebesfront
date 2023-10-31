"use client";

import { useState, useEffect } from "react";

export function ChooseUser({ data }) {
  const [name, setName] = useState(""); // aquí guardamos el nombre que queremos buscar
  const [listUser, setListUser] = useState([]); // guardamos la lista de los usuarios en base de datos
  const [user, setUser] = useState({}); // guardamos el user el cual debemos de hacer el getById

  // hacemos un get sobre user, para obtener todos los user y para después hacer una busqueda por nombre
  const getDataUser = async () => {
    const raw = await fetch("http://localhost:3000/user");
    const data = await raw.json();
    // console.log(data);
    setListUser(data);
  };

  // hacemos getById, para tener todos los datos de un user
  const getDataFind = async () => {
    const raw = await fetch(`http://localhost:3000/user/${user._id}`);
    const data = await raw.json();
    console.log(data, "data user");
    data.Babys.map((item) => console.log(item));
  };

  // hacemos find, para encontrar user dentro de listUser y añadimos los encontrado al useState
  const findUser = (name) => {
    const result = listUser.find((item) => item.name === name);
    // console.log(result, "result");
    return setUser(result);
  };

  // obtenemos la lista de user nada más renderizar el elemento
  useEffect(() => {
    getDataUser();
  }, []);

  // en esta función es donde damos funcionalidad al form, (event) es que se le pasara el evento a la función y .preventDefault() evita que la página se recarge
  // cuando ejecutamos el forms, buscamos el user y los datos del user que queremos ver
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name);
    findUser(name);
    getDataFind();
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
