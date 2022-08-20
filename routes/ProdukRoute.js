import express from "express";
import {
  getProduks,
  getProdukById,
  getProdukBySubKategori,
  saveProduk,
  updateProduk,
  deleteProduk,
} from "../controllers/ProdukController.js";

const router = express.Router();

router.get("/produks", getProduks);
router.get("/produks/:id", getProdukById);
router.get("/produkBySubKategori/:subKategoriId", getProdukBySubKategori);
router.post("/produks", saveProduk);
router.patch("/produks/:id", updateProduk);
router.delete("/produks/:id", deleteProduk);

export default router;
