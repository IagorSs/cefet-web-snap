const image = document.querySelector('.foto-anotada > img');
const filtroDaFoto = document.getElementById('filtro-da-foto');

filtroDaFoto.onchange = ({ target: { value } }) => {
  image.style.filter = value;
}

const imageSelect = document.getElementById('imagem');
imageSelect.addEventListener('change', ({ target: { files } }) => {
  const reader = new FileReader();
  const [file] = files;

  reader.addEventListener('load', ({ target: { result } }) => {
    image.src = result;
  });

  reader.readAsDataURL(file);
})
