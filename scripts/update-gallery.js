const fs = require('fs');
const path = require('path');

// Path to your public gallery folder
const galleryDir = path.join(__dirname, '..', 'public', 'gallery');

// Read all files in the gallery folder
const imageFiles = fs.readdirSync(galleryDir).filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i));

// Write the image filenames to the gallery-images.json file
fs.writeFileSync(path.join(__dirname, '..', 'gallery-images.json'), JSON.stringify(imageFiles, null, 2));

console.log('Gallery image list has been updated!');
