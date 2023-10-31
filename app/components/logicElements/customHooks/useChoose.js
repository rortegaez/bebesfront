import {useState, useEffect} from 'react'

export const useChoose =() =>{

	const [name, setName] = useState(""); // aquí guardamos el nombre que queremos buscar
  const [listUser, setListUser] = useState([]); // guardamos la lista de los usuarios en base de datosos el user el cual debemos de hacer el getById

	 // hacemos un get sobre user, para obtener todos los user y para después hacer una busqueda por nombre
	const getDataUser = async () => {
		const raw = await fetch("http://localhost:3000/user");
		const data = await raw.json()
		setListUser(data)
	}

	// hacemos getById, para tener todos los datos de un user, se crea el condicional, por si el user no existe, no se puede buscar, ya que si lo buscamos, reventamos el backend
  const getDataFind = async (user) => {
		console.log(user, "userFind");
      const raw = await fetch(`http://localhost:3000/user/${user._id}`);
      const data = await raw.json();
      data.Babys.map((item) => console.log(item));
  };

	// hacemos find, para encontrar user dentro de listUser y añadimos los encontrado al useState
	const findUser = (name) => {
		const result = listUser.find((item) => item.name === name);
		// hacemos getById, para tener todos los datos de un user, se crea el condicional, por si el user no existe, no se puede buscar, ya que si lo buscamos, reventamos el backend
		if(result){
			return getDataFind(result)
		} else {
			return
		}
  };

	// obtenemos la lista de user nada más renderizar el elemento
	useEffect(() => {
    getDataUser();
  }, []);

	return{
		findUser,
		setName,
		name
	}
}

