import type { Linter } from "eslint";
export = {
    rules: {
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": ["warn", {
            ignoreEnums: true,
            ignoreNumericLiteralTypes: true,
            ignoreReadonlyClassProperties: true,
            ignoreArrayIndexes: true,
            ignoreDefaultValues: true
        }]
    }
} as Linter.Config;
