import type { Linter } from "eslint";
export = {
    rules: {
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error"
    }
} as Linter.Config;
