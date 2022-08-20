import SubKategori from "../models/SubKategoriModel.js";

export const getSubKategoris = async (req, res) => {
  try {
    const subKategoris = await SubKategori.find();
    res.json(subKategoris);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getSubKategoriById = async (req, res) => {
  try {
    const subKategori = await SubKategori.findById(req.params.id);
    res.json(subKategori);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const getSubKategoriByKategori = async (req, res) => {
  try {
    const subKategori = await SubKategori.find({
      kategoriId: req.params.kategoriId,
    });
    res.json(subKategori);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveSubKategori = async (req, res) => {
  const subKategori = new SubKategori(req.body);
  try {
    const insertedSubKategori = await subKategori.save();
    // Status 201 = Created
    res.status(201).json(insertedSubKategori);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateSubKategori = async (req, res) => {
  try {
    const updatedSubKategori = await SubKategori.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedSubKategori);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteSubKategori = async (req, res) => {
  try {
    const deletedSubKategori = await SubKategori.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedSubKategori);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
