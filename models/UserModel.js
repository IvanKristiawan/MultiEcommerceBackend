import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
    tanggalLahir: { type: String },
    jenisKelamin: { type: String },
    nomorTelepon: { type: String },
    provinsi: { type: String },
    kota: { type: String },
    alamat: { type: String },
    kodePos: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
