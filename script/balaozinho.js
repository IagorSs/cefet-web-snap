const balaozinho = document.getElementById('balaozinho');

const marcacoes = document.getElementsByClassName('marcacao');

for(const marcacao of marcacoes) {
  marcacao.addEventListener('mouseover', () => {
    const titulo = document.createElement('h2');
    titulo.textContent = marcacao.attributes.getNamedItem('data-titulo').value;
  
    const conteudo = document.createElement('p');
    conteudo.textContent = marcacao.attributes.getNamedItem('data-conteudo').value;
  
    const textColor = marcacao.attributes.getNamedItem('data-cor').value;
    
    balaozinho.appendChild(titulo);
    balaozinho.appendChild(conteudo);
    balaozinho.style.color = textColor;
  });

  marcacao.addEventListener('mouseout', () => {
    balaozinho.innerHTML = '';
  });

  marcacao.addEventListener('mousemove', ({ pageX, pageY }) => {
    balaozinho.style.top = `${pageY}px`;
    balaozinho.style.left = `${pageX}px`;
  })
}
