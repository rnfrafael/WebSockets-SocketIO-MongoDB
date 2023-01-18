import {
  apagaLinkDocumento,
  insereLinkDocumento,
  mostraAlertaDeErro,
} from "./index.js";

const socket = io();

socket.emit("obterListaDeDocumentos", (documentosDevolvidos) => {
  documentosDevolvidos.forEach((element) => {
    insereLinkDocumento(element.name);
  });
});

socket.on("adicionaDocumentoIndex", (name) => {
  insereLinkDocumento(name);
});

socket.on("apagaDocumentoFront", (name) => {
  apagaLinkDocumento(name);
});

function enviaNovoDocumentoParaBack(name) {
  socket.emit("novoDocumento", name, (docName) => {
    if (docName) {
      mostraAlertaDeErro(docName);
    }
  });
}

export { enviaNovoDocumentoParaBack };
