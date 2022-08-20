import mongoose from "mongoose";

const ProdukSchema = new mongoose.Schema({
  gambarId: [String],
  gambar: [String],
  subKategoriId: { type: String }, //Buku Desain Dekorasi id
  namaProduk: { type: String }, //Buku Intelligent Investor
  hargaProduk: { type: Number }, //110000
  hargaDiskonProduk: { type: Number }, //100000
  deksripsi: { type: String }, //lorem ipsum...
  totalBintangProduk: { type: Number }, //4.9
});

export default mongoose.model("Produk", ProdukSchema);
