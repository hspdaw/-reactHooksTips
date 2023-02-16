
import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }
    return `${iterationNumber} nº de iteración`;
}



export const MemoHook = () => {
    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);

    const valorMemorizado = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <h4>{valorMemorizado}</h4>


            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={() => setShow(!show)}
            >
                show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
