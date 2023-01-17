import {
  emitirTextoEditor,
  defineSalaEDocumento,
  salvarTexto,
} from "./socket-front.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const elementoCampoTexto = document.getElementById("editor-texto");
const tituloDocumentoNaPagina = document.getElementById("titulo-documento");

tituloDocumentoNaPagina.textContent = nomeDocumento || "Documento sem Titulo";

defineSalaEDocumento(nomeDocumento);

campoTexto.addEventListener("keyup", () => {
  emitirTextoEditor({ content: campoTexto.value, name: nomeDocumento });
  salvarTexto({ content: campoTexto.value, name: nomeDocumento });
});

function atualizaTextoEditor(texto) {
  elementoCampoTexto.value = texto;
}

export { atualizaTextoEditor };
