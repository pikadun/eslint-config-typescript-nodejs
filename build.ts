import { readdirSync, writeFileSync } from "fs";
import { basename, extname, resolve } from "path";
import { build } from "esbuild";
import pkg from "./package.json";

let code = "";
const rules: string[] = [];
const rootdir = resolve(__dirname, "src");

const generateor = (dir: string) => {
    const contents = readdirSync(dir, { withFileTypes: true });
    contents.forEach(content => {
        if (content.isDirectory()) {
            return generateor(resolve(dir, content.name));
        }
        const filename = basename(content.name, extname(content.name));
        const ruleName = filename.replace(/-/g, "");
        const importPath = `.${resolve(dir, content.name).replace(rootdir, "")}`;
        code += `import ${ruleName} from "${importPath}";\n`;
        rules.push(ruleName);
    });
};

generateor(resolve(rootdir, "config"));

code += "\n";
code += "export = {\n";
code += "    extends: [\n";
code += "        \"plugin:@typescript-eslint/recommended\",\n";
code += "        \"plugin:@typescript-eslint/recommended-requiring-type-checking\",\n";
code += "        \"plugin:@typescript-eslint/strict\"\n";
code += "    ],\n";
code += "    parser: \"@typescript-eslint/parser\",\n";
code += "    plugins: [\n";
code += "        \"@typescript-eslint\"\n";
code += "    ],\n";
code += "    rules: Object.assign(\n";
code += `        ${rules.join(",\n        ")}\n`;
code += "    ) as unknown\n";
code += "};\n";

writeFileSync("./src/index.ts", code);

build({
    entryPoints: ["./src/index.ts"],
    format: "cjs",
    bundle: true,
    outfile: pkg.main,
    logLevel: "info",
    minify: true
}).catch(e => {
    console.log(e);
});
