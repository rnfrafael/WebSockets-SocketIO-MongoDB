import { atualizaTextoEditor } from "./documento.js";

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

socket.on("textoEditorClientes", (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor, defineSalaEDocumento, salvarTexto };
