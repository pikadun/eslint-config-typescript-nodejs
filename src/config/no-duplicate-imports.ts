import type { Linter } from "eslint";
export = {
    rules: {
        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error"
    }
} as Linter.Config;
