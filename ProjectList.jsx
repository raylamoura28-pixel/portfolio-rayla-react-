import React from 'react';

function ProjectList() {
  // REQUISITO: Array de objetos com os projetos da Rayla
  const projetosDaRayla = [
    { 
      id: 1, 
      nome: "EcoStore Online", 
      desc: "E-commerce focado em produtos sustentáveis.",
      tech: "HTML, CSS e JavaScript" 
    },
    { 
      id: 2, 
      nome: "App Vida Saudável", 
      desc: "Controle de hábitos diários e ingestão de água.",
      tech: "React e Node.js" 
    },
    { 
      id: 3, 
      nome: "Guia Turístico Piauí", 
      desc: "Portal responsivo sobre pontos turísticos do estado.",
      tech: "CSS Grid e Flexbox" 
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projetosDaRayla.map((proj) => (
          <div key={proj.id} className="project-card">
            <h3>{proj.nome}</h3>
            <p>{proj.desc}</p>
            <small><strong>Tecnologias:</strong> {proj.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
