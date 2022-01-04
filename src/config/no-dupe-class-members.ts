import type { Linter } from "eslint";
export = {
    rules: {
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": "error"
    }
} as Linter.Config;
