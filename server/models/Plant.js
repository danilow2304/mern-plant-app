const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    scientificName: { type: String, trim: true },
    description: { type: String, trim: true },
    sunlight: { type: String, trim: true },
    soil: { type: String, trim: true },
    water: { type: String, trim: true },
    height: { type: String, trim: true },
    bloomSeason: { type: String, trim: true },
    nativeRange: { type: String, trim: true },
    wildlifeBenefits: { type: String, trim: true },
    image: { type: String, trim: true },
  },
  { timestamps: true }
);

// Collection name will be "plants" in database "nativePlantApp"
module.exports = mongoose.model('Plant', plantSchema);
