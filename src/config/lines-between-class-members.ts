import type { Linter } from "eslint";
export = {
    rules: {
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "error"
    }
} as Linter.Config;
