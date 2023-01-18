import SocketBackEndService from "../services/SocketBackEndService.js";

const documentosService = new SocketBackEndService();

class DocumentoController {
  async criaDocumento(documento) {
    const jaExisteDocumento = await documentosService.pegaDocumento(
      documento.name
    );
    if (jaExisteDocumento) {
      return false;
    }
    return await documentosService.criaDocumento(documento);
  }

  async pegaTexto(name) {
    const documento = await documentosService.pegaDocumento(name);
    if (!documento) {
      console.log("erro ao pegar documento");
    } else {
      return documento.content;
    }
  }

  async salvaDocumento({ name, content }) {
    const result = documentosService.salvaDocumento({ content, name });
    return result;
  }

  async obterDocumentos() {
    const documentos = await documentosService.obterDocumentos();
    return documentos;
  }

  async apagaDocumento(name) {
    return await documentosService.apagaDocumento(name);
  }
}

export default DocumentoController;
