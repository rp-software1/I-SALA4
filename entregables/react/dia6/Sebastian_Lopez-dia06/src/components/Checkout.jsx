import { useState, useEffect } from "react"

export default function Checkout() {

    const [comprado, setComprado] = useState(false);

    const pagar = () => {

        setComprado(true);

        useEffect(() => {
            if (comprado) { console.log("compra exitosa") }

        }, [comprado]);

    }

    return (

        <div style={{ padding: "15px" }}>
            <h3>ESTO ES UN CHECKOUT</h3>

            <button onClick={pagar}>esto es un boton</button>

            {comprado && (<p>compra exitosa</p>)}

        </div>

    )

}