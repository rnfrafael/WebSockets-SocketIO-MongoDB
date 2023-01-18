import { atualizaTextoEditor, alertaERedireciona } from "./documento.js";

const socket = io();

function defineSalaEDocumento(tituloDocumento) {
  socket.emit("nomeSalaDocumento", tituloDocumento, (textoAtualizado) => {
    atualizaTextoEditor(textoAtualizado);
  });
}

function emitirTextoEditor(dados) {
  socket.emit("textoEditor", dados);
}

function salvarTexto(dados) {
  socket.emit("salvaTexto", dados);
}

function emitirApagaDocumento(documento) {
  socket.emit("apagaDocumento", documento);
}

socket.on("textoEditorClientes", (texto) => {
  atualizaTextoEditor(texto);
});

socket.on("apagaDocumentoFront", (name) => {
  alertaERedireciona(name);
});

export {
  emitirTextoEditor,
  defineSalaEDocumento,
  salvarTexto,
  emitirApagaDocumento,
};
