import express from "express";
import {
  getKategoris,
  getKategoriById,
  getKategoriByJenis,
  saveKategori,
  updateKategori,
  deleteKategori,
} from "../controllers/KategoriController.js";

const router = express.Router();

router.get("/kategoris", getKategoris);
router.get("/kategoris/:id", getKategoriById);
router.get("/kategoriByJenis/:jenisKategori", getKategoriByJenis);
router.post("/kategoris", saveKategori);
router.patch("/kategoris/:id", updateKategori);
router.delete("/kategoris/:id", deleteKategori);

export default router;
