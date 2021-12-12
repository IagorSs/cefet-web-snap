const image = document.querySelector('.foto-anotada > img');
const filtroDaFoto = document.getElementById('filtro-da-foto');

filtroDaFoto.onchange = ({ target: { value } }) => {
  image.style.filter = value;
}
