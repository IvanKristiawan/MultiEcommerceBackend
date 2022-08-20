import mongoose from "mongoose";

const KeranjangSchema = new mongoose.Schema({
  produkId: { type: String }, //Buku Intelligent Investor id
  userId: { type: String }, //Nanda id
  jumlahBarang: { type: Number }, //5
  totalHarga: { type: Number }, //100000
});

export default mongoose.model("Keranjang", KeranjangSchema);
