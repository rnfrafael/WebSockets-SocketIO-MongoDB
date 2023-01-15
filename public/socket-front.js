import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionaDocumento(tituloDocumento) {
  socket.emit("tipoDocumento", titulo);
}

function emitirTextoEditor(texto) {
  socket.emit("textoEditor", texto);
}

socket.on("textoEditorClientes", (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor, atualizaTextoEditor, selecionaDocumento };
