import type { Linter } from "eslint";
import { readdirSync } from "fs";
import { join, basename, extname, resolve } from "path";

const configurationFiles = readdirSync(resolve(__dirname, "config"));
const configs = configurationFiles.map(file => `./${join("config", basename(file, extname(file)))}`);
export = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": configs.concat([
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ])
} as Linter.Config;
