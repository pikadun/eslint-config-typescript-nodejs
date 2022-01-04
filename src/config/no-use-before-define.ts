import type { Linter } from "eslint";
export = {
    rules: {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error"
    }
} as Linter.Config;
