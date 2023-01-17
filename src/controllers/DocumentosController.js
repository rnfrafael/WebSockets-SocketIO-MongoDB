import documentos from "../models/Documentos.js";

class DocumentoController {
  static async criaDocumento(documento) {
    let novoDocumento = new documentos(documento);
    try {
      const result = await novoDocumento.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async pegaDocumento(name) {
    let query = await documentos.findOne({ name: name });
    return query;
  }

  static async salvaDocumento({ name, content }) {
    let query = await documentos.findOneAndUpdate(
      { name: name },
      { content: content }
    );
  }

  static async obterDocumentos() {
    return await documentos.find();
  }
}

export default DocumentoController;
