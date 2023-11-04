import { useDetailsContext } from '@/app/context/context';
import {useState, useEffect} from 'react'

export const useChoose =() =>{

	const [name, setName] = useState(""); // aquí guardamos el nombre que queremos buscar
  const [listUser, setListUser] = useState([]); // guardamos la lista de los usuarios en base de datosos el user el cual debemos de hacer el getById
	const {setDataUser, setExists} = useDetailsContext() // traemos los elementos del context

	 // hacemos un get sobre user, para obtener todos los user y para después hacer una busqueda por nombre
	const getDataUser = async () => {
		const raw = await fetch("http://localhost:3000/user");
		const data = await raw.json()
		setListUser(data)
	}

	// hacemos el cambio en el useState del context, para pasar los datos a DetailsUser
	const pushDate = (data) => {
		setDataUser(data)
		setExists(true)
	}

	// hacemos getById, para tener todos los datos de un user, se crea el condicional, por si el user no existe, no se puede buscar, ya que si lo buscamos, reventamos el backend
  const getDataFind = async (user) => {
		try {
      const raw = await fetch(`http://localhost:3000/user/${user._id}`);
      const data = await raw.json();
			return pushDate(data)
		} catch (error) {
			console.error('Error obtener datos', error)
		}
  };

	// hacemos find, para encontrar user dentro de listUser y añadimos los encontrado al useState
	const findUser = (name) => {
		const result = listUser.find((item) => item.name === name);
		// hacemos getById, para tener todos los datos de un user, se crea el condicional, por si el user no existe, no se puede buscar, ya que si lo buscamos, reventamos el backend
		if(result){
			return getDataFind(result)
		} else {
			return setExists(false)
		}
  };

	useEffect(() => {
		getDataUser()
	},[])

	return{
		findUser,
		setName,
		name
	}
}

