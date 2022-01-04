import type { Linter } from "eslint";
export = {
    rules: {
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": "error"
    }
} as Linter.Config;
