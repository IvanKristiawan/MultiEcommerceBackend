import Kategori from "../models/KategoriModel.js";

export const getKategoris = async (req, res) => {
  try {
    const kategoris = await Kategori.find();
    res.json(kategoris);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKategoriById = async (req, res) => {
  try {
    const kategori = await Kategori.findById(req.params.id);
    res.json(kategori);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const getKategoriByJenis = async (req, res) => {
  try {
    const kategori = await Kategori.find({
      jenisKategori: req.params.jenisKategori,
    });
    res.json(kategori);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveKategori = async (req, res) => {
  const kategori = new Kategori(req.body);
  try {
    const insertedKategori = await kategori.save();
    // Status 201 = Created
    res.status(201).json(insertedKategori);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateKategori = async (req, res) => {
  try {
    const updatedKategori = await Kategori.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedKategori);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteKategori = async (req, res) => {
  try {
    const deletedKategori = await Kategori.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedKategori);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
