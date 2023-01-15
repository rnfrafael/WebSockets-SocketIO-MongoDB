import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = process.env.port || 3001;

const server = http.createServer(app);

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

server.listen(port, () =>
  console.log(`Servidor ligado em http://localhost:${port}`)
);

const io = new Server(server);

export default io;
