import { useState, useRef } from 'react'
import styles from './App.module.css'

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultadoIMC, setResultadoIMC] = useState(false);
  const imc = Number(peso / (altura * altura));

  const tabelaRef = useRef(null);

  const renderizaImc = () => {
    return imc.toFixed(2);
  }  

  const obterDadosDaTabela = () => {
    if (tabelaRef.current) {
      const linhas = tabelaRef.current.getElementsByTagName('tr');

      for(let i = 0; i < linhas.length; i++) {
        const idDaLinha = linhas[i].id;
        console.log(`ID da linha ${i + 1}: ${idDaLinha}`);

        if(imc >= 30 && imc <=35) {
          return true;
        }
      }
    }
  }

  function renderizar() {
    setResultadoIMC(!resultadoIMC);
    obterDadosDaTabela()
  }


  //
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
        <button className={styles.button} type="button" onClick={() => renderizar()}>Calcular</button>

        <p>Seu imc é: {resultadoIMC && (
          <>  
            {renderizaImc()}
          </> 
          )}
        </p>
      </div> 

      <div className={styles.tableContainer}>
            <table ref={tabelaRef}>
              <thead>
                <tr>
                  <th>IMC(kg/m2)</th>
                  <th>Classificação</th>
                </tr>
              </thead>
              <tbody>
                <tr id='table-1'>
                  <td>Menor que 16,9</td>
                  <td>Muito abaixo do peso</td>
                </tr>
    
                <tr id='table-2'>
                  <td>17 a 18,4</td>
                  <td>Abaixo do peso</td>
                </tr>
    
                <tr id='table-3'>
                  <td>18,5 a 24,9</td>
                  <td>Peso normal</td>
                </tr>
    
                <tr className={obterDadosDaTabela() === true ? styles.active : ''} id='table-4'>
                  <td>25 a 29,9</td>
                  <td>Acima do peso</td>
                </tr>
    
                <tr className={obterDadosDaTabela() === true ? styles.active : ''} id='table-5'>
                  <td>30 a 34,9</td>
                  <td>Obesidade grau 1</td>
                </tr>
    
                <tr id='table-6'>
                  <td>35 a 40</td>
                  <td>Obesidade grau 2</td>
                </tr>
    
                <tr id='table-7'> 
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
