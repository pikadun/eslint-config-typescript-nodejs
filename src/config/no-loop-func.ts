import type { Linter } from "eslint";
export = {
    rules: {
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error"
    }
} as Linter.Config;
