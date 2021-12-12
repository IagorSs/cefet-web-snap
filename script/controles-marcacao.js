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

const formatoMarcacao = document.querySelectorAll('[name="formato-da-marcacao"]');

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

const handlerStyleChange = (prop, value) => {
  const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
  marcacaoSelecionada.style[prop] = `${value}px`;
}

xDaMarcacao.onkeyup = ({ target:{ value } }) => handlerStyleChange('left', value);
xDaMarcacao.onchange = ({ target:{ value } }) => handlerStyleChange('left', value);

yDaMarcacao.onkeyup = ({ target:{ value } }) => handlerStyleChange('top', value);
yDaMarcacao.onchange = ({ target:{ value } }) => handlerStyleChange('top', value);

larguraMarcacao.onkeyup = ({ target:{ value } }) => handlerStyleChange('width', value);
larguraMarcacao.onchange = ({ target:{ value } }) => handlerStyleChange('width', value);

alturaMarcacao.onkeyup = ({ target:{ value } }) => handlerStyleChange('height', value);
alturaMarcacao.onchange = ({ target:{ value } }) => handlerStyleChange('height', value);

const handlerAttributerChange = (attrName, value) => {
  const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");
  marcacaoSelecionada.attributes.getNamedItem(attrName).value = value;
}

tituloMarcacao.onkeyup = ({ target:{ value } }) => handlerAttributerChange('data-titulo', value);
conteudoMarcacao.onkeyup = ({ target:{ value } }) => handlerAttributerChange('data-conteudo', value);
corMarcacao.onchange = ({ target:{ value } }) => handlerAttributerChange('data-cor', value);

[...formatoMarcacao].forEach(formatRadio => {
  formatRadio.onchange = () => {
    const formatoMarcacao = document.querySelector(`[name="formato-da-marcacao"]:checked`).value;

    const marcacaoSelecionada = document.querySelector(".marcacao.selecionada");

    const newClassList = [...marcacaoSelecionada.classList].filter(classMark => !classMark.startsWith('formato'));
    newClassList.push(formatoMarcacao);

    marcacaoSelecionada.classList = newClassList.join(' ');
  }
});
