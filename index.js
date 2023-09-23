var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
  updateSliderBackground(this);
};

slider.addEventListener("mouseup", function () {
  updateSliderBackground(this);
});

function updateSliderBackground(slider) {
  var percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background =
    "linear-gradient(to right, #a4ffaf 0%, #a4ffaf " +
    percent +
    "%, #18171F " +
    percent +
    "%, #18171F 100%)";
}

function copiarTexto() {
  let textoCopiado = document.getElementById("passGenerated");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}

function gerarSenha() {
  const tamanho = parseInt(output.innerHTML); // Use o valor do div #demo
  const incluirMaiusculas = document.getElementById("maiusculas").checked;
  const incluirMinusculas = document.getElementById("minusculas").checked;
  const incluirNumeros = document.getElementById("numeros").checked;
  const incluirSymbols = document.getElementById("symbols").checked;
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "1234567890";
  const symbols = "!@#$%^&*";
  const caracteres =
    (incluirMaiusculas ? maiusculas : "") +
    (incluirMinusculas ? minusculas : "") +
    (incluirNumeros ? numeros : "") +
    (incluirSymbols ? symbols : "");

  if (caracteres === "") {
    alert("Pelo menos uma opção de caracteres deve ser selecionada");
    return;
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }

  document.getElementById("passGenerated").value = senha;
}
