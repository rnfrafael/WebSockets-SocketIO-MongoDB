import io from "./server.js";

io.on("connection", (socket) => {
  console.log(`"Um cliente se conectou!" ID: ${socket.id}`);

  socket.on("textoEditor", (texto) => {
    // console.log(texto);
    socket.broadcast.emit("textoEditorClientes", texto);
  });
});
