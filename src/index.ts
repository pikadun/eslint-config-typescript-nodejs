import arraybracketspacing from "./config/array-bracket-spacing.json";
import arraytype from "./config/array-type.json";
import bantslintcomment from "./config/ban-tslint-comment.json";
import bracestyle from "./config/brace-style.json";
import classliteralpropertystyle from "./config/class-literal-property-style.json";
import commadangle from "./config/comma-dangle.json";
import commaspacing from "./config/comma-spacing.json";
import consistentindexedobjectstyle from "./config/consistent-indexed-object-style.json";
import consistenttypeassertions from "./config/consistent-type-assertions.json";
import consistenttypedefinitions from "./config/consistent-type-definitions.json";
import consistenttypeimports from "./config/consistent-type-imports.json";
import curly from "./config/curly.json";
import defaultparamlast from "./config/default-param-last.json";
import eollast from "./config/eol-last.json";
import explicitfunctionreturntype from "./config/explicit-function-return-type.json";
import explicitmemberaccessibility from "./config/explicit-member-accessibility.json";
import explicitmoduleboundarytypes from "./config/explicit-module-boundary-types.json";
import funccallspacing from "./config/func-call-spacing.json";
import indent from "./config/indent.json";
import initdeclarations from "./config/init-declarations.json";
import keyspacing from "./config/key-spacing.json";
import keywordspacing from "./config/keyword-spacing.json";
import linecommentposition from "./config/line-comment-position.json";
import linesaroundcomment from "./config/lines-around-comment.json";
import linesbetweenclassmembers from "./config/lines-between-class-members.json";
import memberdelimiterstyle from "./config/member-delimiter-style.json";
import memberordering from "./config/member-ordering.json";
import methodsignaturestyle from "./config/method-signature-style.json";
import multilinecommentstyle from "./config/multiline-comment-style.json";
import noconfusingnonnullassertion from "./config/no-confusing-non-null-assertion.json";
import nodupeclassmembers from "./config/no-dupe-class-members.json";
import noduplicateimports from "./config/no-duplicate-imports.json";
import nodynamicdelete from "./config/no-dynamic-delete.json";
import noextraparens from "./config/no-extra-parens.json";
import noextraneousclass from "./config/no-extraneous-class.json";
import noinvalidthis from "./config/no-invalid-this.json";
import noinvalidvoidtype from "./config/no-invalid-void-type.json";
import noloopfunc from "./config/no-loop-func.json";
import nomagicnumbers from "./config/no-magic-numbers.json";
import nomultispaces from "./config/no-multi-spaces.json";
import nomultipleemptylines from "./config/no-multiple-empty-lines.json";
import nononnullassertednullishcoalescing from "./config/no-non-null-asserted-nullish-coalescing.json";
import noparameterproperties from "./config/no-parameter-properties.json";
import noredeclare from "./config/no-redeclare.json";
import norequireimports from "./config/no-require-imports.json";
import norestrictedimports from "./config/no-restricted-imports.json";
import noshadow from "./config/no-shadow.json";
import notemplatecurlyinstring from "./config/no-template-curly-in-string.json";
import notrailingspaces from "./config/no-trailing-spaces.json";
import notypealias from "./config/no-type-alias.json";
import nounusedexpressions from "./config/no-unused-expressions.json";
import nousebeforedefine from "./config/no-use-before-define.json";
import nouselessconstructor from "./config/no-useless-constructor.json";
import objectcurlyspacing from "./config/object-curly-spacing.json";
import paddinglinebetweenstatements from "./config/padding-line-between-statements.json";
import preferenuminitializers from "./config/prefer-enum-initializers.json";
import preferforof from "./config/prefer-for-of.json";
import preferfunctiontype from "./config/prefer-function-type.json";
import preferliteralenummember from "./config/prefer-literal-enum-member.json";
import preferoptionalchain from "./config/prefer-optional-chain.json";
import prefertsexpecterror from "./config/prefer-ts-expect-error.json";
import quoteprops from "./config/quote-props.json";
import quotes from "./config/quotes.json";
import restspreadspacing from "./config/rest-spread-spacing.json";
import semi from "./config/semi.json";
import sorttypeunionintersectionmembers from "./config/sort-type-union-intersection-members.json";
import spacebeforefunctionparen from "./config/space-before-function-paren.json";
import spaceinfixops from "./config/space-infix-ops.json";
import spacedcomment from "./config/spaced-comment.json";
import typeannotationspacing from "./config/type-annotation-spacing.json";
import typedef from "./config/typedef.json";
import unifiedsignatures from "./config/unified-signatures.json";

export = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: Object.assign(arraybracketspacing,
        arraytype,
        bantslintcomment,
        bracestyle,
        classliteralpropertystyle,
        commadangle,
        commaspacing,
        consistentindexedobjectstyle,
        consistenttypeassertions,
        consistenttypedefinitions,
        consistenttypeimports,
        curly,
        defaultparamlast,
        eollast,
        explicitfunctionreturntype,
        explicitmemberaccessibility,
        explicitmoduleboundarytypes,
        funccallspacing,
        indent,
        initdeclarations,
        keyspacing,
        keywordspacing,
        linecommentposition,
        linesaroundcomment,
        linesbetweenclassmembers,
        memberdelimiterstyle,
        memberordering,
        methodsignaturestyle,
        multilinecommentstyle,
        noconfusingnonnullassertion,
        nodupeclassmembers,
        noduplicateimports,
        nodynamicdelete,
        noextraparens,
        noextraneousclass,
        noinvalidthis,
        noinvalidvoidtype,
        noloopfunc,
        nomagicnumbers,
        nomultispaces,
        nomultipleemptylines,
        nononnullassertednullishcoalescing,
        noparameterproperties,
        noredeclare,
        norequireimports,
        norestrictedimports,
        noshadow,
        notemplatecurlyinstring,
        notrailingspaces,
        notypealias,
        nounusedexpressions,
        nousebeforedefine,
        nouselessconstructor,
        objectcurlyspacing,
        paddinglinebetweenstatements,
        preferenuminitializers,
        preferforof,
        preferfunctiontype,
        preferliteralenummember,
        preferoptionalchain,
        prefertsexpecterror,
        quoteprops,
        quotes,
        restspreadspacing,
        semi,
        sorttypeunionintersectionmembers,
        spacebeforefunctionparen,
        spaceinfixops,
        spacedcomment,
        typeannotationspacing,
        typedef,
        unifiedsignatures)
};
