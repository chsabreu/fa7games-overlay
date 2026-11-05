const params = new URLSearchParams(location.search);
// Fundo transparente por padrão (OBS). Use ?preview=1 só para ver no navegador.
if (params.has("preview")) {
  document.body.classList.add("preview");
}
