import glob from "fast-glob";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
const SolidCompiler = (svg) => {
  const svgWithProps = svg
    .replace(/([{}])/g, "{'$1'}")
    .replace(/width="\d+"/, `width='1em'`)
    .replace(
      /height="\d+"/,
      `height='1em\nfocusable={false}\naria-hidden={true}'`
    )
    .replace(/(?<=<svg.*?)(>)/i, "{...props}>") // eslint-disable-line
    .replace(`fill="black"`, `fill="currentColor"`);

  return `import { convertIcon } from '../components/Icon';
  const SvgComponent = (props = {}) => ${svgWithProps};
  const IconComponent = convertIcon(SvgComponent, 'activity');
  export default IconComponent;`;
};
const root = path.resolve(process.cwd(), "../src/icons");
const arr = [];

function IconName(basename) {
  return basename.split(/_|-/).reduce((prev, curr) => {
    if (typeof curr !== "string") return prev;
    return (
      prev + (curr.length > 0 ? curr[0].toUpperCase() + curr.slice(1) : "")
    );
  }, "Icon");
}

function transfer(id, importer) {
  if (id.endsWith(".svg")) {
    const where = importer;

    const to = path.resolve(root, IconName(id.replace(".svg", "")) + ".tsx");
    console.log(to);
    const code = readFileSync(where, "utf-8");

    const tsxCode = SolidCompiler(code);
    writeFileSync(to, tsxCode);
    arr.push(to);
  }
}

const res = await glob("../src/svgs/*.svg");
res.forEach((p) => {
  const fileName = path.basename(p);
  transfer(fileName, p);
});

writeFileSync(
  path.resolve(root, "index.ts"),
  arr
    .map((i) => {
      const f = path.basename(i).replace(/\.\w+$/, "");
      return `export {default as ${f}} from './${f}';`;
    })
    .join("\n")
);
