import type { Linter } from "eslint";
export = {
    rules: {
        "padding-line-between-statements": "off",
        "@typescript-eslint/padding-line-between-statements": "error"
    }
} as Linter.Config;
