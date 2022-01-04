import type { Linter } from "eslint";
export = {
    rules: {
        semi: "off",
        "@typescript-eslint/semi": "error"
    }
} as Linter.Config;
