import { useEffect } from "react";
import { useState } from "react"


export default function SimpleForm() {

    const [formState, setFormState] = useState({
        username: 'test',
        email: 'mail@mail'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      console.log('useEffect')
    });
    


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
        </>
    )
}
