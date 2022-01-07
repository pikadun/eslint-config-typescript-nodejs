import { readdirSync, writeFileSync } from "fs";
import { basename, extname, resolve } from "path";
import { build } from "esbuild";
import pkg from "./package.json";

let code = "";
const rules: string[] = [];
const configurationFiles = readdirSync(resolve(__dirname, "./src/config"));
configurationFiles.forEach((filename, index) => {
    filename = basename(filename, extname(filename));
    const ruleName = filename.replace(/-/g, "");
    code += `import ${ruleName} from "./config/${filename}.json";\n`;
    rules.push(ruleName);
});
code += "\n";
code += "export = {\n";
code += "    parser: \"@typescript-eslint/parser\",\n";
code += "    plugins: [\n";
code += "        \"@typescript-eslint\"\n";
code += "    ],\n";
code += `    rules: Object.assign(${rules.join(",\n        ")})\n`;
code += "};\n";

writeFileSync("./src/index.ts", code);

build({
    entryPoints: ["./src/index.ts"],
    format: "cjs",
    bundle: true,
    outfile: pkg.main,
    logLevel: "info",
    minify: true
});
