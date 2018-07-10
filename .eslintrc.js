module.exports = {
    'env': {
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [2, 4], // оповещать как ошибку
        'semi': [2, 'always'], // оповещать как ошибку
        'brace-style': [2, '1tbs'], // оповещать как ошибку
        'no-unused-vars': [1], // оповещать как предупреждение
        'no-console': [0]
    }
};