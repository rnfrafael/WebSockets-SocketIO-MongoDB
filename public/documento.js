import { emitirTextoEditor, selecionaDocumento } from "./socket-front.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const elementoCampoTexto = document.getElementById("editor-texto");
const tituloDocumentoNaPagina = document.getElementById("titulo-documento");

tituloDocumentoNaPagina.textContent = nomeDocumento || "Documento sem Titulo";

selecionaDocumento(nomeDocumento);

elementoCampoTexto.addEventListener("keyup", () => {
  emitirTextoEdidtor(elementoCampoTexto.value);
});

function atualizaTextoEditor(texto) {
  elementoCampoTexto.value = texto;
}

export { atualizaTextoEditor };
