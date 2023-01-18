import {
  emitirTextoEditor,
  defineSalaEDocumento,
  salvarTexto,
  emitirApagaDocumento,
} from "./socket-front.js";

const socket = io();

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const elementoCampoTexto = document.getElementById("editor-texto");
const tituloDocumentoNaPagina = document.getElementById("titulo-documento");
const botaoExcluirDocumento = document.getElementById("excluir-documento");

tituloDocumentoNaPagina.textContent = nomeDocumento || "Documento sem Titulo";

defineSalaEDocumento(nomeDocumento);

elementoCampoTexto.addEventListener("keyup", () => {
  emitirTextoEditor({ content: elementoCampoTexto.value, name: nomeDocumento });
  salvarTexto({ content: elementoCampoTexto.value, name: nomeDocumento });
});

botaoExcluirDocumento.addEventListener("click", () => {
  emitirApagaDocumento(nomeDocumento);
});

function atualizaTextoEditor(texto) {
  elementoCampoTexto.value = texto;
}

function alertaERedireciona(name) {
  alert(`Documento ${name} excluído`);
  window.location.href = "/";
}

export { atualizaTextoEditor, alertaERedireciona };
