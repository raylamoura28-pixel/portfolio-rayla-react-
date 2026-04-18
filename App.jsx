import React from 'react';
import ProjectList from './ProjectList'; // Importando o componente criado acima
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo"><strong>Rayla</strong> Dev</div>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h1>Sobre Mim</h1>
          <p>
            Olá! Meu nome é Rayla e sou estudante de Tecnologia em Sistemas para Internet. 
            Sou focada em criar interfaces modernas e funcionais.
          </p>
        </section>

        {/* Chamada do componente de projetos */}
        <ProjectList />
      </main>
    </div>
  );
}

export default App;
