import io from "./server.js";
import db from "./config/db.js";
import DocumentoController from "./controllers/DocumentosController.js";

const documentoController = new DocumentoController();

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
  console.log("Conexão com MongoDB realizada.");
});

io.on("connection", (socket) => {
  socket.on("obterListaDeDocumentos", async (devolverDocumentos) => {
    const documentos = await documentoController.obterDocumentos();
    devolverDocumentos(documentos);
  });

  socket.on("novoDocumento", async (name, callback) => {
    const documentoFoiCriado = await documentoController.criaDocumento({
      name: name,
      content: name,
    });
    documentoFoiCriado
      ? io.emit("adicionaDocumentoIndex", name)
      : callback(name);
  });

  socket.on("nomeSalaDocumento", async (roomDocumentName, callback) => {
    socket.join(roomDocumentName);

    const texto = await documentoController.pegaTexto(roomDocumentName);

    callback(texto);
  });

  socket.on("textoEditor", ({ name, content }) => {
    socket.to(name).emit("textoEditorClientes", content);
  });

  socket.on("salvaTexto", ({ name, content }) => {
    documentoController.salvaDocumento({ name, content });
  });

  socket.on("apagaDocumento", async (documento) => {
    const result = await documentoController.apagaDocumento(documento);
    if (result.deletedCount) {
      io.emit("apagaDocumentoFront", documento);
    }
  });
});
