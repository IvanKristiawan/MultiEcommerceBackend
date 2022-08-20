import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
import Produk from "../models/ProdukModel.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const getProduks = async (req, res) => {
  try {
    const produks = await Produk.find();
    res.json(produks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getProdukById = async (req, res) => {
  try {
    const produk = await Produk.findById(req.params.id);
    res.json(produk);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const getProdukBySubKategori = async (req, res) => {
  try {
    const produk = await Produk.find({
      subKategoriId: req.params.subKategoriId,
    });
    res.json(produk);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveProduk = async (req, res) => {
  const produk = new Produk(req.body);
  try {
    const insertedProduk = await produk.save();
    // Status 201 = Created
    res.status(201).json(insertedProduk);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateProduk = async (req, res) => {
  try {
    const updatedProduk = await Produk.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedProduk);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduk = async (req, res) => {
  try {
    const produk = await Produk.findById(req.params.id);
    for (let i = 0; i < produk.gambarId.length; i++) {
      await cloudinary.v2.uploader.destroy(
        `${produk.gambarId[i]}`,
        function (error, result) {
          console.log(result, error);
        }
      );
    }
    const deletedProduk = await Produk.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedProduk);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
