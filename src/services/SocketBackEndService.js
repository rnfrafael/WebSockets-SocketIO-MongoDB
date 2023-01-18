import documentos from "../models/Documentos.js";

class SocketBackEndService {
  async salvaDocumento({ content, name }) {
    const result = await documentos.findOneAndUpdate(
      { name: name },
      { content: content }
    );
    return result;
  }

  async pegaDocumento(name) {
    return await documentos.findOne({ name: name });
  }

  async obterDocumentos() {
    return await documentos.find();
  }

  async criaDocumento(documento) {
    let novoDocumento = new documentos(documento);
    try {
      return await novoDocumento.save();
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async apagaDocumento(name) {
    return await documentos.deleteOne({ name: name });
  }
}

export default SocketBackEndService;
