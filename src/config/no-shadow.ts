import type { Linter } from "eslint";
export = {
    rules: {
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error"
    }
} as Linter.Config;
