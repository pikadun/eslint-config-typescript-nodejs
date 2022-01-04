import type { Linter } from "eslint";
export = {
    rules: {
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error"
    }
} as Linter.Config;
