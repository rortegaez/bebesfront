import {useState} from 'react'

export const useUsers = () =>{

	const [isOpen, setIsOpen] = useState(false)
	const [isUsers, setIsUsers] = useState('')

	const  verLog = (typeUser) => {
		console.log(typeUser)
	}

	return{
		isOpen,
		verLog,
		isUsers
	}
}

