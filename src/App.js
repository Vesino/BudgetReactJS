import React, { useState, useEffect } from 'react';
import './App.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [budget, setBudget] = useState(0)
  const [delta, setDelta] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [saveGasto, setSaveGasto] = useState(false)

  useEffect(() => {
    if (saveGasto) {
      setGastos([
        ...gastos,
        gasto
      ])

      const computeDelta = delta - gasto.cantidad
      setDelta(computeDelta)

      setSaveGasto(false)
    }
  }, [gasto, delta, setSaveGasto, saveGasto, gastos])

  return (
    <div className="containe">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
        { showQuestion ? (<Pregunta 
            setBudget={setBudget}
            setDelta={setDelta}
            setShowQuestion={setShowQuestion}
          />) : (
          <div className="row">
            <div className="one-half column">
              <Formulario
                setSaveGasto={setSaveGasto}
                setGasto={setGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={gastos}
              />
              <ControlPresupuesto
                budget={budget}
                delta={delta}
              />
          </div>
        </div>)
        }
        </div>
      </header>
    </div>
  );
}

export default App;
