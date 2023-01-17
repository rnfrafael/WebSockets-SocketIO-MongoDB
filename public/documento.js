import {
  emitirTextoEditor,
  defineSalaEDocumento,
  salvarTexto,
} from "./socket-front.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const campoTexto = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem Titulo";

defineSalaEDocumento(nomeDocumento);

campoTexto.addEventListener("keyup", () => {
  emitirTextoEditor({ content: campoTexto.value, name: nomeDocumento });
  salvarTexto({ content: campoTexto.value, name: nomeDocumento });
});

function atualizaTextoEditor(texto) {
  campoTexto.value = texto;
}

export { atualizaTextoEditor };
