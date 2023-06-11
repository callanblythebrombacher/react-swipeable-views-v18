const path = require('path');

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        "@babel/plugin-syntax-jsx",
        "babel-plugin-inline-import-graphql-ast"
    ]
};
