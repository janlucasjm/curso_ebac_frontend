import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultadoIMC, setResultadoIMC] = useState(false);

  const renderizaImc = () => {
    const imc = Number(peso / (altura * altura));
    return imc.toFixed(2);
  }  

  return (
    <>
    <div className={styles.container}>
      <h2>Cálculo IMC</h2>
      <div className={styles.calcValues}>
        <div>
          <label htmlFor="altura">Altura:</label>
          <input id='altura' type="number" placeholder='Metros' onChange={evento => setAltura(evento.target.value)}/>
        </div>
        x
        <div>
          <label htmlFor="peso">Peso:</label>
          <input id='peso' type="number" placeholder='Quilos' onChange={evento => setPeso(evento.target.value)}/>
        </div>
      </div>

      <div className={styles.result}>
        <button className={styles.button} type="button" onClick={() => setResultadoIMC(!resultadoIMC)}>Calcular</button>

        <p>Seu imc é: {resultadoIMC && (
          <>  
            {renderizaImc()}
          </> 
          )}
        </p>
      </div> 

      <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>IMC(kg/m2)</th>
                  <th>Classificação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Menor que 16,9</td>
                  <td>Muito abaixo do peso</td>
                </tr>
    
                <tr>
                  <td>17 a 18,4</td>
                  <td>Abaixo do peso</td>
                </tr>
    
                <tr>
                  <td>18,5 a 24,9</td>
                  <td>Peso normal</td>
                </tr>
    
                <tr>
                  <td>25 a 29,9</td>
                  <td>Acima do peso</td>
                </tr>
    
                <tr>
                  <td>30 a 34,9</td>
                  <td>Obesidade grau 1</td>
                </tr>
    
                <tr>
                  <td>35 a 40</td>
                  <td>Obesidade grau 2</td>
                </tr>
    
                <tr>
                  <td>Maior que 40</td>
                  <td>Obesidade grau 3</td>
                </tr>
              </tbody>
            </table>
      </div>     
    </div>
    </>
  )
}

export default App
