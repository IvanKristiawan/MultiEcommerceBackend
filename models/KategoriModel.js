import mongoose from "mongoose";

const KategoriSchema = new mongoose.Schema({
  jenisKategori: { type: String }, //Buku
  namaKategori: { type: String }, //Desain
});

export default mongoose.model("Kategori", KategoriSchema);
