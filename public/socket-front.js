import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionaDocumento(tituloDocumento) {
  socket.emit("tipoDocumento", titulo);
}

function emitirTextoNoCampoEditor(texto) {
  socket.emit("textoDoCampoEditor", texto);
}

socket.on("textoEditorClientes", (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoNoCampoEditor, atualizaTextoEditor, selecionaDocumento };
