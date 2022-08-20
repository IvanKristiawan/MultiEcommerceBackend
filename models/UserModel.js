import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    namaLengkap: { type: String },
    email: { type: String },
    kataSandi: { type: String },
    tanggalLahir: { type: String },
    jenisKelamin: { type: String },
    nomorTelepon: { type: String },
    provinsi: { type: String },
    kota: { type: String },
    alamat: { type: String },
    kodePos: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
