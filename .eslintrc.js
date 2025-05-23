module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint'],
    env: {
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single']
    }
};