module.exports = {
    arrowParens: 'always',
    singleQuote: true,
    jsxSingleQuote: true,
    useTabs: false,
    tabWidth: 4,
    semi: true,
    endOfLine: 'lf',
    proseWrap: 'preserve',
    trailingComma: 'es5',
    printWidth: 100,
    // Code samples inside notes are transcriptions of what a lesson taught.
    // Leave them byte-identical instead of restyling them.
    embeddedLanguageFormatting: 'off',
    overrides: [
        {
            // Markdown keeps the 2-space indent markdownlint's MD007 and MD030
            // expect. At tabWidth 4 Prettier rewrites every nested list and the
            // linter then rejects what the formatter just wrote.
            files: '*.md',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
