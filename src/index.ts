import eollast from "./config/eol-last.json";
import indent from "./config/indent.json";
import quotes from "./config/quotes.json";
import semi from "./config/semi.json";

export = {
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: Object.assign(
        eollast,
        indent,
        quotes,
        semi
    )
};
