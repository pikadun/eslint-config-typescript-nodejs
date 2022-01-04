import type { Linter } from "eslint";
export = {
    rules: {
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "error"
    }
} as Linter.Config;
