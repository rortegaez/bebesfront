"use client"

import { createContext, useContext, useState } from "react";

const DetailsContext = createContext()

export const DetailsContextProvider = ({ children }) => {
	// incluimos el context dentro de useChoose, para pasar los datos y que lleguen al componente DetailsUser
	const [dataUser, setDataUser] = useState({}) // Pasamos los datos de user filtrado
	const [exists, setExists] = useState(false) // para si el componente no existe, nos pasa false y entonces renderizamos usuario no existente

	return(
		<DetailsContext.Provider value={{setDataUser, dataUser, setExists, exists}}>
			{children}
		</DetailsContext.Provider>
	)
}

export const useDetailsContext = () => useContext(DetailsContext)