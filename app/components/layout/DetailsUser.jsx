import { useEffect, useState } from "react";
import { useDetailsContext } from "@/app/context/context";

// css en mainpage
import "../../globals.css";

export function DetailsUser() {
  const [dataLoaded, setDataLoader] = useState(false);
  const { dataUser, exists } = useDetailsContext();

  useEffect(() => {
    console.log(dataUser, "Cambio de dataUser");
    // hasta que dataUser no es mayor a 0, setDataLoader el false, entonces se renderiza el primer return
    if (Object.keys(dataUser).length > 0) {
      setDataLoader(true);
    }
  }, [dataUser]);

  if (!exists) {
    return <div>Este usuario no existe</div>;
  }
  if (!dataLoaded) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className="boxDetails">
      <section className="boxCardBabys">
        {dataUser.Babys.map((item, index) => (
          <div className="cardBaby" key={index}>
            <p>Nombre: {item.name}</p>
            <p>Peso: {item.Weight}gr</p>
            <p>Altura: {item.Tall}cm</p>
            <p>Nacimiento: {item.Birthday}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
