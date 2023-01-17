import mongoose from "mongoose";

const documentosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: "documentos" }
);

const documentos = mongoose.model("documentos", documentosSchema);

export default documentos;
