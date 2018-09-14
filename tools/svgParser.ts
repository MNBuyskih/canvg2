import * as fs from "fs";
import * as path from "path";

async function run() {
  let svgDir = path.resolve(__dirname, "..", "resources/svg");
  const files = await fs.promises.readdir(svgDir);
  const data = files
    .filter(file => /\.svg$/.test(file))
    .map((file) => {
      return {
        svg: `../resources/svg/${file}`,
        png: `../resources/svg/${file}.png`,
        file,
      };
    });

  const pathToResources = path.resolve(__dirname, "../examples/resources.json");
  await fs.promises.writeFile(pathToResources, JSON.stringify(data));
}

run();
