import type { Linter } from "eslint";
export = {
    rules: {
        "@typescript-eslint/no-type-alias": ["error", {
            allowAliases: "always"
        }]
    }
} as Linter.Config;
