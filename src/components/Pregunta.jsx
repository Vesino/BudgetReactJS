import React, { useState } from 'react';
import Error from './Error';

const Pregunta = ({setBudget, setDelta, setShowQuestion}) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    const addBudget = e => {
        e.preventDefault();
        if (cantidad < 1 || isNaN( cantidad )) {
            setError(true)
            return;
        }

        setError(false)
        setBudget(cantidad)
        setDelta(cantidad)
        setShowQuestion(false)
    }
    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
     );
}
 
export default Pregunta;