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
        '@babel/preset-typescript', // Add TypeScript preset
    ],
    plugins: [
        '@babel/plugin-syntax-jsx',
        'babel-plugin-inline-import-graphql-ast',
    ],
};
