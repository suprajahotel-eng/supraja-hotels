const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = "D:\\Downloads\\lodgeimages";
const outputDir = "E:\\suprajahotels\\supraja-hotels\\public\\images\\lodge";

const files = fs.readdirSync(inputDir).filter((file) =>
  /\.(jpg|jpeg|png)$/i.test(file)
);

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
      outputDir,
      path.parse(file).name + ".webp"
    );

    await sharp(inputPath)
      .resize({
        width: 1600,
        withoutEnlargement: true,
      })
      .webp({
        quality: 65,
        effort: 6,
      })
      .toFile(outputPath);

    console.log("Converted:", file);
  }

  console.log(`Done. Converted ${files.length} images.`);
})();