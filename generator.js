// generate-component-json.js

const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];

if (!componentName) {
  console.error("❌ Please provide a component name as an argument");
  console.log("👉 Example: node generate-component-json.js get-started-button");
  process.exit(1);
}

const componentDir = path.join(__dirname, "./");
const outputDir = path.join(__dirname, "public", "components");

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const filesToInclude = fs
  .readdirSync(componentDir)
  .filter((file) => file.endsWith(".tsx") || file.endsWith(".ts"));

const json = {
  name: componentName,
  description: `Component: ${componentName}`,
  files: filesToInclude.map((file) => {
    const filePath = path.join(componentDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    return {
      name: file,
      content,
    };
  }),
};

fs.writeFileSync(
  path.join(outputDir, `${componentName}.json`),
  JSON.stringify(json, null, 2)
);

console.log(`✅ Generated ${componentName}.json in public/components/`);
