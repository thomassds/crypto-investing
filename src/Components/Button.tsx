import '../styles/button.scss'

import { useState } from "react";

type ButtonProps = {
    text?: string
}

export function Button(props: ButtonProps) {
    const [ count, setCount ] = useState(0);
    
    function increment() {
        setCount(count + 1);
    }
    return (
        <button onClick={increment}>
            {count}
        </button>
    )
}