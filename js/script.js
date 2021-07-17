const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let data = {
    nome,
    email,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  let content = document.getElementById("content");

  let carregando = `<p>cadastrando...</p>`;

  let cadastrado = `<p>cadastrado com sucesso!</p>`;

  let reload = `<h1><a href="">Voltar</a></h1>`;

  content.innerHTML = carregando;

  setTimeout(() => {
    content.innerHTML = cadastrado;
  }, 500);

  setTimeout(() => {
    content.innerHTML = reload;
  }, 1500);
});
