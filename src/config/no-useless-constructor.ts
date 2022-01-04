import type { Linter } from "eslint";
export = {
    rules: {
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error"
    }
} as Linter.Config;
