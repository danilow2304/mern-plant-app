require('dotenv').config();
const mongoose = require('mongoose');
const Plant = require('./models/Plant');

const plants = [
  { name: 'Purple Coneflower', scientificName: 'Echinacea purpurea', description: 'Daisy-like pink-purple flowers with a raised orange cone.', sunlight: 'Full sun', soil: 'Well-drained', water: 'Low to medium', height: '2-4 ft', bloomSeason: 'Summer', nativeRange: 'Eastern and central North America', wildlifeBenefits: 'Bees, butterflies, goldfinches', image: '' },
  { name: 'Black-eyed Susan', scientificName: 'Rudbeckia hirta', description: 'Bright yellow petals around a dark brown center.', sunlight: 'Full sun', soil: 'Average', water: 'Low', height: '1-3 ft', bloomSeason: 'Summer to fall', nativeRange: 'Most of North America', wildlifeBenefits: 'Pollinators, seed-eating birds', image: '' },
  { name: 'Wild Bergamot', scientificName: 'Monarda fistulosa', description: 'Lavender tubular flowers with a minty scent.', sunlight: 'Full sun to part shade', soil: 'Dry to medium', water: 'Low to medium', height: '2-4 ft', bloomSeason: 'Summer', nativeRange: 'Eastern and central North America', wildlifeBenefits: 'Hummingbirds, bees, butterflies', image: '' },
  { name: 'Butterfly Milkweed', scientificName: 'Asclepias tuberosa', description: 'Orange flower clusters; host plant for monarchs.', sunlight: 'Full sun', soil: 'Sandy or rocky', water: 'Low', height: '1-3 ft', bloomSeason: 'Early to mid summer', nativeRange: 'Eastern and central North America', wildlifeBenefits: 'Monarch caterpillars, pollinators', image: '' },
  { name: 'New England Aster', scientificName: 'Symphyotrichum novae-angliae', description: 'Violet flowers with yellow centers that bloom late.', sunlight: 'Full sun', soil: 'Moist', water: 'Medium', height: '3-6 ft', bloomSeason: 'Late summer to fall', nativeRange: 'Eastern and central North America', wildlifeBenefits: 'Migrating monarchs, native bees', image: '' },
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/nativePlantApp');
  await Plant.deleteMany({});
  await Plant.insertMany(plants);
  console.log(`Seeded ${plants.length} plants into nativePlantApp.plants`);
  await mongoose.disconnect();
})();
