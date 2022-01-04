import type { Linter } from "eslint";
export = {
    rules: {
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error"
    }
} as Linter.Config;
