const params = new URLSearchParams(location.search);
const transparent = params.has("obs") || params.get("fundo") === "transparente";
if (!transparent) {
  document.body.classList.add("preview");
}
