"use client";

// importación de los datos de los botones
import optionsUser from "./optionsUser";

// css realizado en user.scss
import "../../globals.css";

export function UserOptions(props) {
  // en esta función estamos devolviendo a través del props, el type, al componente padre
  const handletype = (type) => {
    props.questionIsOpen(type);
  };

  return (
    <div className="boxUser">
      {/* hacemos map de optionsUser, que es donde tenemos los valores de los botones */}
      {optionsUser.map((item, index) => (
        <h1 key={index} className="user" onClick={() => handletype(item.type)}>
          {/* a través de la función pasamos los datos para que seán el argumento de la función */}
          {item.name}
        </h1>
      ))}
    </div>
  );
}
