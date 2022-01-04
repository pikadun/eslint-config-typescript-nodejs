import type { Linter } from "eslint";
export = {
    rules: {
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "error"
    }
} as Linter.Config;
