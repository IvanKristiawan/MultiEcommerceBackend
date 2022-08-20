import mongoose from "mongoose";

const ProdukSchema = new mongoose.Schema({
  produkId: { type: String }, //Buku Intelligent Investor id
  totalBintang: { type: Number }, //4.9
  semuaReview: [
    {
      bintang: Number, //5
      idUser: String, //Nanda
      reviewUser: String, //bukunya bagus
    },
  ],
});

export default mongoose.model("Produk", ProdukSchema);
