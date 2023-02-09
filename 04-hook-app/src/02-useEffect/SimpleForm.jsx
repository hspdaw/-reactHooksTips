import { useEffect } from "react";
import { useState } from "react"
import { Message } from "./Message";


export default function SimpleForm() {

    const [formState, setFormState] = useState({
        username: 'Metallica',
        email: 'mail@mail'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        //desestructurando el target
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      console.log('useEffect')
    },[]); 

    useEffect(() => {
      console.log('formState ha cambiado')
    },[formState]);
    
    useEffect(() => {
      console.log('email ha cambiado')
    },[email]);
    


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                tyoe="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                tyoe="email"
                className="form-control mt-2"
                placeholder="hookApp@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {(username === 'Metallica') && <Message/>}
        </>
    )
}
