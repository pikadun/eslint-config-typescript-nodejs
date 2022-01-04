import type { Linter } from "eslint";
export = {
    rules: {
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"]
    }
} as Linter.Config;
