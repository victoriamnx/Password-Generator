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

function calcularForcaSenha(senha) {
  let forca = 0;

  // Verificar o comprimento da senha
  forca += senha.length * 4;

  // Verificar se a senha possui letras maiúsculas
  if (/[A-Z]/.test(senha)) {
    forca += (senha.length - senha.replace(/[A-Z]/g, "").length) * 2;
  }

  // Verificar se a senha possui letras minúsculas
  if (/[a-z]/.test(senha)) {
    forca += (senha.length - senha.replace(/[a-z]/g, "").length) * 2;
  }

  // Verificar se a senha possui números
  if (/[1-9]/.test(senha)) {
    forca += (senha.length - senha.replace(/[1-9]/g, "").length) * 4;
  }

  // Verificar se a senha possui símbolos
  if (/[!@#$%¨&*]/.test(senha)) {
    forca += (senha.length - senha.replace(/[!@#$%¨&*]/g, "").length) * 6;
  }

  return forca;
}

function gerarSenha() {
  const tamanho = parseInt(output.innerHTML);
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

  const forcaSenha = calcularForcaSenha(senha);

  document.getElementById("passGenerated").value = senha;

  // Exibir a força da senha
  const strengthText = document.getElementById("stg");
  const strengthBars = document.querySelectorAll(".bars > div");
  let strengthLevel = "WEAK";

  if (forcaSenha >= 60) {
    strengthLevel = "STRONG";
  } else if (forcaSenha >= 30) {
    strengthLevel = "MEDIUM";
  }

  strengthText.innerText = strengthLevel;

  // Atualizar barras de força
  strengthBars.forEach((bar, index) => {
    if (index < forcaSenha / 10) {
      bar.style.backgroundColor = "#a4ffaf";
    } else {
      bar.style.backgroundColor = "#18171F";
    }
  });
}
