import React, { useState } from 'react';
import './App.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  const [budget, setBudget] = useState(0)
  const [delta, setDelta] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)

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
              <Formulario />
            </div>
            <div className="one-half column">
              2
          </div>
        </div>)
        }
        </div>
      </header>
    </div>
  );
}

export default App;
