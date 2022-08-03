import indent from "./config/indent.json";

export = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: Object.assign(
        indent
    )
};
