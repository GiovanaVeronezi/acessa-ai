import { useState } from 'react'
import './App.css'

function App() {
  const [perdoou, setPerdoou] = useState(false)
  const [data, setData] = useState('')

  const [posicaoNao, setPosicaoNao] = useState({
    top: '70%',
    left: '60%'
  })

  function fugirDoNao() {
    const top = Math.floor(Math.random() * 70) + 10
    const left = Math.floor(Math.random() * 70) + 10

    setPosicaoNao({
      top: `${top}%`,
      left: `${left}%`
    })
  }

  function formatarData(data) {
    const dataFormatada = new Date(`${data}T00:00:00`)

    return dataFormatada.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <main className="pagina">

      {/* Corações decorativos */}
      <span className="coracao coracao1">♡</span>
      <span className="coracao coracao2">♡</span>
      <span className="coracao coracao3">♡</span>
      <span className="coracao coracao4">♡</span>

      {!perdoou ? (

        <section className="cartao">

          <div className="icone">💌</div>

          <span className="pequeno-titulo">
            para o nico
          </span>

          <h1>
            Me desculpa,
            <br />
            meu amor.
          </h1>

          <div className="linha"></div>

        

          <p className="mensagem">
            Espero que possamos ficar bem
          </p>

          <div className="pergunta">
            Você me desculpa por hoje?
          </div>

          <div className="area-botoes">

            <button
              className="botao-sim"
              onClick={() => setPerdoou(true)}
            >
              Sim
            </button>

            <button
              className="botao-nao"
              style={{
                top: posicaoNao.top,
                left: posicaoNao.left
              }}
              onMouseEnter={fugirDoNao}
              onClick={fugirDoNao}
            >
              Não 
            </button>

          </div>

          <span className="rodape">
            Feito com amor especialmente para você 
          </span>

        </section>

      ) : (

        <section className="cartao date-card">

    

          <h1>
            hehehehehe
          </h1>

          <div className="linha"></div>

          <p className="escolha">
            Escolha o dia do nosso date
          </p>

          <div className="calendario">

            <label htmlFor="data">
              📅 Nosso dia
            </label>

            <input
              id="data"
              type="date"
              value={data}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setData(e.target.value)}
            />

          </div>

          {data && (

            <div className="confirmacao">

              <span>✨</span>

              <p>
                Então está marcado!
              </p>

              <strong>
                {formatarData(data)}
              </strong>

              <small>
                Nosso date oficial ❤️
              </small>

            </div>

          )}

        </section>

      )}

    </main>
  )
}

export default App