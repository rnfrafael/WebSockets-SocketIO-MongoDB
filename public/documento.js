import { emitirTextoEditor, selecionaDocumento } from "./socket-front.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const campoTexto = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem Titulo";

selecionaDocumento(nomeDocumento);

campoTexto.addEventListener("keyup", () => {
  emitirTextoEditor(campoTexto.value);
});

function atualizaTextoEditor(texto) {
  campoTexto.value = texto;
}

export { atualizaTextoEditor };
