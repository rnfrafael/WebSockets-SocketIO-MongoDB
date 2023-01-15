const documentos = [
  {
    name: "JavaScript",
    content: "Texto javascript salvo na memoria",
  },
  {
    name: "Node",
    content: "Texto node salvo na memoria",
  },
  {
    name: "Socket.io",
    content: "Texto Socket.io salvo na memoria",
  },
];

function pegaTextoNaMemoria({ local }) {
  const documento = documentos.find((doc) => {
    doc.name == local;
  });
  return documento.content;
}

function salvaTextoNaMemoria({ texto, local }) {
  const documento = documentos.find((doc) => {
    doc.name == local;
  });
  documento.content = texto;
}
