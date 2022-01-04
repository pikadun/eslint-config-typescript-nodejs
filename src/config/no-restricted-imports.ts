import type { Linter } from "eslint";
export = {
    rules: {
        "no-restricted-imports": "off",
        "@typescript-eslint/no-restricted-imports": "error"
    }
} as Linter.Config;
