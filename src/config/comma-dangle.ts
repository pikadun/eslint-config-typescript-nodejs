import type { Linter } from "eslint";
export = {
    rules: {
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": "error"
    }
} as Linter.Config;
