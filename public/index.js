/*
<a href="documento.html?nome=JavaScript" class="list-group-item list-group-item-action">
JavaScript
</a>
<a href="documento.html?nome=Node" class="list-group-item list-group-item-action">
Node
</a>
<a href="documento.html?nome=Socket.io" class="list-group-item list-group-item-action">
Socket.io
</a>
      */
import "./socket-front-index.js";
import { enviaNovoDocumentoParaBack } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const inputNovoDocumento = document.getElementById("input-documento");
const buttonEnviaDocumento = document.getElementById("envia-doc");

buttonEnviaDocumento.onclick = () => {
  if (inputNovoDocumento.value) {
    enviaNovoDocumentoParaBack(inputNovoDocumento.value);
  }
};

function insereLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `<a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
  ${nomeDocumento}
  </a>`;
}

export { insereLinkDocumento };
