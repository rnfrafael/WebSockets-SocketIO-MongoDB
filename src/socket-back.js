import io from "./server.js";

io.on("connection", (socket) => {
  console.log(`"Um cliente se conectou!" ID: ${socket.id}`);

  socket.on("textoDoCampoEditor", (texto) => {
    // console.log(texto);
    socket.broadcast.emit("textoEditorClientes", texto);
    salvaTextoNaMemoria(texto);
    // salvaNoBancoDeDados(texto);
  });
});
