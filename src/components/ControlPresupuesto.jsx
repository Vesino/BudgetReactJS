import React from 'react';
import { checkBudget } from '../helpers';

const ControlPresupuesto = ({budget, delta}) => {
    return ( 
        <>
        <div className="alert alert-primary">
            Presupuesto: $ {budget}
        </div>
        <div className={checkBudget(budget, delta)}>
            Restante: $ {delta}
        </div>
        </>
     );
}
 
export default ControlPresupuesto;
