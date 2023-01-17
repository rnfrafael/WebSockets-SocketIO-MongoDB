import { insereLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obterListaDeDocumentos", (documentosDevolvidos) => {
  documentosDevolvidos.forEach((element) => {
    insereLinkDocumento(element.name);
  });
});

function enviaNovoDocumentoParaBack(name) {
  socket.emit("novoDocumento", name, (documento) => {
    if (documento) {
      insereLinkDocumento(name);
    }
  });
}

export { enviaNovoDocumentoParaBack };
