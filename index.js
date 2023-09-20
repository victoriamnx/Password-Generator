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
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}

