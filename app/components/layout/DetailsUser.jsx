import { useEffect, useState } from "react";
import { useDetailsContext } from "@/app/context/context";

// css en mainpage
import "../../globals.css";

export function DetailsUser() {
  const [dataLoaded, setDataLoader] = useState(false);
  const { dataUser } = useDetailsContext();

  useEffect(() => {
    console.log(dataUser, "Cambio de dataUser");
    // hasta que dataUser no es mayor a 0, setDataLoader el false, entonces se renderiza el primer return
    if (Object.keys(dataUser).length > 0) {
      setDataLoader(true);
    }
  }, [dataUser]);

  if (!dataLoaded) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className="boxDetails">
      <h1>DetailsUser</h1>
    </div>
  );
}
