import React, { useState } from 'react';
import './Juego.css'

const opciones = ['piedra', 'papel', 'tijera'];

function Game()  {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * opciones.length);
    return opciones[randomIndex];
  };

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();

    setUserChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult('Empate');
    } else if (
      (choice === 'piedra' && computerChoice === 'tijera') ||
      (choice === 'papel' && computerChoice === 'piedra') ||
      (choice === 'tijera' && computerChoice === 'papel')
    ) {
      setResult('Ganaste');
    } else {
      setResult('Perdiste');
    }
  };

  return (
    <>
    

    <div className="App">
      <h1>Piedra, Papel o Tijera</h1>
      <div className="choices">
        {opciones.map((opcion) => (
          <button key={opcion} onClick={() => handleUserChoice(opcion)}>
            {opcion}
          </button>
        ))}
      </div>
      <div className="result">
        {userChoice && <p>Tu elección: {userChoice}</p>}
        {computerChoice && <p>Elección de la computadora: {computerChoice}</p>}
        {result && <p>Resultado: {result}</p>}
      </div>

    </div>
    </>
    
  );
}

export default Game;