import React from 'react';
import './App.css';
import ''

// Componente Sessão
function Sessao(props) {
  const { titulo, descricao, dataHora, local } = props;

  return (
    <div className="sessao">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>{dataHora}</p>
      <p>{local}</p>
    </div>
  );
}

// Componente Galeria Responsiva
function Galeria(props) {
  const { imagens } = props;

  return (
    <div className="galeria">
      {imagens.map((imagem, index) => (
        <div className="imagem" key={index}>
          <img src={imagem.src} alt={imagem.alt} />
        </div>
      ))}
    </div>
  );
}

// App principal
function App() {
  <div class="container">
  const imagens = [
    { src: 'imagem1.jpg', alt: 'Imagem 1' },
    { src: 'imagem2.jpg', alt: 'Imagem 2' },
    { src: 'imagem3.jpg', alt: 'Imagem 3' },
    { src: 'imagem4.jpg', alt: 'Imagem 4' },
  ];
  </div>

  return (
    <div className="App">
      <header>
        <img src="senai.jpg" alt="Logo Senai" />
      </header>

      <Sessao
        titulo="Festa junina"
        descricao="As festas juninas, também conhecidas como festas dos santos populares ou arraiais, são um evento cultural vibrante que celebra a chegada do inverno no hemisfério sul, entre os meses de junho e julho. Com raízes que remontam à Europa pré-cristã, essa tradição centenária se consolidou no Brasil como um momento de grande alegria, união e celebração da fé, da cultura caipira e dos sabores típicos do campo."
        dataHora="Data e hora da sessão (22/4/2024-8:52)"
        local="Auditório Senai"
      />

      <Galeria imagens={imagens} />

      <footer>
        <p>Knabben 3b</p>
      </footer>
    </div>
  );
}

export default App;
