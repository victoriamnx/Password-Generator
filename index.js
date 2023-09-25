var slider = document.getElementById("myRange");
var output = document.getElementById("length");

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

  // Esconde o ícone
  const copyIcon = document.getElementById("copybtn");
  copyIcon.style.display = "none";

  // Exibe o texto "Copied" por 2 segundos
  const copiedText = document.getElementById("copiedText");
  copiedText.style.display = "flex";
  setTimeout(() => {
    copiedText.style.display = "none";
    // Torna a exibir o ícone após o desaparecimento do texto
    copyIcon.style.display = "inline";
  }, 2000); // Tempo em milissegundos (2 segundos no exemplo)
}

function gerarSenha() {
  const tamanho = parseInt(output.innerHTML); // valor da div #length
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
    alert("At least one character option must be selected");
    return;
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }

  document.getElementById("passGenerated").value = senha;
}

