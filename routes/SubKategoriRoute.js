import express from "express";
import {
    getSubKategoris,
    getSubKategoriById,
    getSubKategoriByKategori,
    saveSubKategori,
    updateSubKategori,
    deleteSubKategori
} from "../controllers/SubKategoriController.js"

const router = express.Router();

router.get("/subKategoris", getSubKategoris);
router.get("/subKategoris/:id", getSubKategoriById);
router.get("/subKategoriByKategori/:kategoriId", getSubKategoriByKategori);
router.post("/subKategoris", saveSubKategori);
router.patch("/subKategoris/:id", updateSubKategori);
router.delete("/subKategoris/:id", deleteSubKategori);

export default router;
