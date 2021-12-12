const removeMarcacoesSelecionadas = () => {
  for (const marcacao of marcacoes) {
    marcacao.classList.remove('selecionada');
  }
};

const xDaMarcacao = document.getElementById('x-da-marcacao');
const yDaMarcacao = document.getElementById('y-da-marcacao');
const larguraMarcacao = document.getElementById('largura-da-marcacao');
const alturaMarcacao = document.getElementById('altura-da-marcacao');

const tituloMarcacao = document.getElementById('titulo-da-marcacao');
const conteudoMarcacao = document.getElementById('conteudo-da-marcacao');
const corMarcacao = document.getElementById('cor-da-marcacao');

const formatoMarcacao = document.querySelector('[name="formato-da-marcacao"]');

for (const marcacao of marcacoes) {
  marcacao.addEventListener('click', () => {
    removeMarcacoesSelecionadas();
    marcacao.classList.add('selecionada');

    const { left:x, top:y, width, height } = marcacao.style;

    xDaMarcacao.value = parseFloat(x);
    yDaMarcacao.value = parseFloat(y);
    larguraMarcacao.value = parseFloat(width);
    alturaMarcacao.value = parseFloat(height);

    tituloMarcacao.value = marcacao.attributes.getNamedItem('data-titulo').value;
    conteudoMarcacao.value = marcacao.attributes.getNamedItem('data-conteudo').value;
    corMarcacao.value = marcacao.attributes.getNamedItem('data-cor').value;

    const [formato] = [...marcacao.classList].filter(classMark => classMark.startsWith('formato'));
    document.querySelector(`[name="formato-da-marcacao"][value="${formato}"]`).checked = true;
  })
}
