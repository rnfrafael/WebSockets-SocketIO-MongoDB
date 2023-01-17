import io from "./server.js";
import db from "./config/db.js";
import SocketBackEndService from "./services/SocketBackEndService.js";

db.on("error", console.log.bind(console, "Erro de Conexão"));
db.once("open", () => {
  console.log("Conexão com MongoDB realizada.");
});

io.on("connection", (socket) => {
  socket.on("obterListaDeDocumentos", async (devolverDocumentos) => {
    const documentos = await SocketBackEndService.obterDocumentos();
    devolverDocumentos(documentos);
    console.log("alo");
  });

  socket.on("novoDocumento", async (name, callback) => {
    //console.log(name, "dentro do socket back end");
    const documento = await SocketBackEndService.criaDocumento({
      name: name,
      content: name,
    });
    if (documento) {
      callback(name);
    }
  });

  socket.on("nomeSalaDocumento", async (roomDocumentName, callback) => {
    socket.join(roomDocumentName);

    const texto = await SocketBackEndService.pegaTexto(roomDocumentName);

    callback(texto);
  });

  socket.on("textoEditor", ({ name, content }) => {
    socket.to(name).emit("textoEditorClientes", content);
  });

  socket.on("salvaTexto", ({ name, content }) => {
    SocketBackEndService.atualizaTexto({ name, content });
  });
});
