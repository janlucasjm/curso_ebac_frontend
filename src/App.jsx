import { useState } from 'react'
import styles from './App.module.css';
import { Imc_data } from './data/imc_data';


function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState('');

  const mostraEstiloTabela = (min_value, max_value) => {
    if (!imc || !min_value || !max_value) {
      return '';
    }

    return (imc >= Number(min_value) && imc < Number(max_value)) ? styles.active : '';
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
        <button disabled={!imc && !peso || !altura} className={styles.button} type="button" onClick={() => setImc(Number(peso / (altura * altura)).toFixed(2))}>Calcular</button>

        <p>Seu imc é: {imc && (
          <>  
            {imc}
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
                {Imc_data.map(({max_value, min_value, description, id}) => (
                  <tr key={`table-${id}`} id={`table-${id}`} className={mostraEstiloTabela(min_value, max_value)}>
                    <td>{Number(min_value)} a {Number(max_value)}</td>
                    <td>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>     
    </div>
    </>
  )
}

export default App
