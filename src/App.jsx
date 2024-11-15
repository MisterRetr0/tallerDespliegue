import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1> Hola Mundo! </h1>
      <h2> Hello World! </h2>
      <h3> Salut Monde! </h3>
      <hr />
      <div className="card">
        <h2>
          Taller de despliegue
        </h2>
      </div>
      <p className="read-the-docs">
        Nombres de los integrantes: 
        <br></br> 
        <hr />
        <br></br> 
        <b>Alejandro Florez Mesa 🏀🇨🇴 - Camilo Jimenez Loaiza🕹️  🇨🇴 - Tomas Romero Eusse⚽ 🇨🇴</b>
      </p>
    </>
  )
}

export default App
