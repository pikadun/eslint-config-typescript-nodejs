import type { Linter } from "eslint";
export = {
    rules: {
        quotes: "off",
        "@typescript-eslint/quotes": "error"
    }
} as Linter.Config;
