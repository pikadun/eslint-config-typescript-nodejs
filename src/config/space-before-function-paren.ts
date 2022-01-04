import type { Linter } from "eslint";
export = {
    rules: {
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always"
        }]
    }
} as Linter.Config;
