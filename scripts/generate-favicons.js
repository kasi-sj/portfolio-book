const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Source image
const sourceImage = path.join(__dirname, '../public/kasinathan_sj_logo.jpg');

// Check if source image exists
if (!fs.existsSync(sourceImage)) {
  console.error(`Error: Source image not found at ${sourceImage}`);
  process.exit(1);
}

// Output directory
const outputDir = path.join(__dirname, '../public');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create PNGs of different sizes
async function generatePNG(size, outputName) {
  try {
    await sharp(sourceImage)
      .resize(size, size)
      .toFormat('png')
      .toFile(path.join(outputDir, outputName));
    console.log(`Generated ${outputName}`);
  } catch (error) {
    console.error(`Error generating ${outputName}:`, error);
  }
}

// Generate all favicon files
async function generateFavicons() {
  try {
    // Generate PNG files of different sizes
    await generatePNG(16, 'favicon-16x16.png');
    await generatePNG(32, 'favicon-32x32.png');
    await generatePNG(192, 'favicon-192x192.png');
    await generatePNG(512, 'favicon-512x512.png');
    await generatePNG(180, 'apple-touch-icon.png');
    
    // For favicon.ico, we'll copy the 32x32 PNG and rename it to favicon.ico
    // This is a temporary solution, but browsers will recognize it
    // For proper ICO files, you would use a package like 'to-ico' or an online converter
    fs.copyFile(
      path.join(outputDir, 'favicon-32x32.png'),
      path.join(outputDir, 'favicon.ico'),
      (err) => {
        if (err) {
          console.error('Error creating favicon.ico:', err);
        } else {
          console.log('Generated favicon.ico (copied from favicon-32x32.png)');
        }
      }
    );
    
    console.log('Favicon generation complete.');
    console.log('Note: For a proper multi-size favicon.ico, consider using an online converter or installing the to-ico package.');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// Run the favicon generation
generateFavicons();

