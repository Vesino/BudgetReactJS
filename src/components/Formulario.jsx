import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({setGasto, setSaveGasto}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault();

        if (cantidad < 1 || isNaN( cantidad ) || nombre.trim === "") {
            setError(true)
            return;
        }
        setError(false)

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        setGasto(gasto)
        setSaveGasto(true)
        setNombre("")
        setCantidad(0)
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o gastos equivocado"/> : null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gastos</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. $300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt( e.target.value, 10))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
     );
}
 
export default Formulario;