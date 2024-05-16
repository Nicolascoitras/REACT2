import logo from './assets/fav.webp'
import { useState } from 'react'
import './App.css'


function App() {
  var user = []
  const [posts, setPosts] = useState([]);

  const handleAddPost = () => {
  
  
  };
  return (
    <>
      <header>
    <h1><a href="#"><img src={logo} alt=""/></a> IPE - Identificação de Problemas Ecológicos </h1>
    <nav>
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#informacoes">Informações</a></li>
        <li><a href="#ferramentas">Ferramentas</a></li>
        <li><a href="#comunidade">Comunidade</a></li>
      </ul>

    </nav>
  </header>

  <main>
    <section id="sobre">
      <h2>Sobre o Site</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam orci non felis consequat, ut molestie velit pharetra. Nulla facilisi. Vestibulum sit amet orci a nisi consequat commodo non sed arcu.</p>
    </section>

    <section id="informacoes">
      <h2>Informações sobre Problemas Ecológicos</h2>
      
    </section>

    <section id="ferramentas">
      <h2>Ferramentas de Identificação</h2>
      
    </section>

    <section id="comunidade">
      <h2>Comunidade Ambiental</h2>
     
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Identificação de Problemas Ecológicos</p>
  </footer>
    </>
  )
}

export default App
