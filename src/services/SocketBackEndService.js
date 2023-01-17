import DocumentoController from "../controllers/DocumentosController.js";

class SocketBackEndService {
  static async atualizaTexto({ content, name }) {
    DocumentoController.salvaDocumento({ content, name });
    return true;
  }

  static async pegaTexto(name) {
    const documento = await DocumentoController.pegaDocumento(name);
    if (!documento) {
      console.log("erro");
    } else {
      return documento.content;
    }
  }

  static async obterDocumentos() {
    return await DocumentoController.obterDocumentos();
  }

  static async criaDocumento(documento) {
    return await DocumentoController.criaDocumento(documento);
  }
}

export default SocketBackEndService;
