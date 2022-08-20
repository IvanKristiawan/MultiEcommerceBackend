import mongoose from "mongoose";

const SubKategoriSchema = new mongoose.Schema({
  kategoriId: { type: String }, //Desain id
  namaSubKategori: { type: String }, //Buku Desain Dekorasi
});

export default mongoose.model("SubKategori", SubKategoriSchema);
