import { useEffect } from "react";
import { useState } from "react"
import { useForm } from "../hooks/useForm";



export default function FormWithCustomHook() {
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: "",
        email: "",
        password: "",
    });

    /* const { username, email, password } = formState; */

    useEffect(() => {
        console.log('useEffect')
    }, []);

    useEffect(() => {
        console.log('formState ha cambiado')
    }, [formState]);

    useEffect(() => {
        console.log('email ha cambiado')
    }, [email]);



    return (
        <>
            <h1>Formulario con custom Hook </h1>
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
            <input
                tyoe="password"
                className="form-control mt-2"
                placeholder="clave"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-s">Borrar</button>
        </>
    )
}
