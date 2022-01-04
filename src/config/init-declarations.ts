import type { Linter } from "eslint";
export = {
    rules: {
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "error"
    }
} as Linter.Config;
