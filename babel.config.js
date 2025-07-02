module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }], // Para compatibilidade com JS moderno
        '@babel/preset-react', // Para processar JSX
    ],
};