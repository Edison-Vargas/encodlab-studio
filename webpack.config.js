const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Use 'production' para o build final
    entry: './src/index.js', // Ponto de entrada do seu aplicativo React
    output: {
        path: path.resolve(__dirname, 'dist'), // Onde os arquivos compilados serão colocados
        filename: 'bundle.js', // Nome do arquivo de saída
        publicPath: '/', // Necessário para o react-router-dom e devServer
        clean: true, // Limpa o diretório 'dist' antes de cada build
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Regra para arquivos JavaScript e JSX
                exclude: /node_modules/, // Exclui a pasta node_modules
                use: {
                    loader: 'babel-loader', // Usa o Babel para transpilar
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/, // Regra para arquivos CSS
                use: [
                    'style-loader',   // 1. Injeta CSS no DOM
                    'css-loader',     // 2. Interpreta @import e url() como import/require()
                    'postcss-loader', // 3. Processa CSS com PostCSS (incluindo Tailwind)
                ],
            },
            // Se você tiver imagens, fontes, etc., adicione regras para elas aqui
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Caminho para seu arquivo HTML de template
            filename: 'index.html', // Nome do arquivo HTML de saída
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Onde os arquivos estáticos serão servidos
        },
        compress: true, // Habilita a compressão gzip
        port: 3001, // Porta do servidor de desenvolvimento
        open: true, // Abre o navegador automaticamente
        historyApiFallback: true, // Para roteamento de SPA (evita erro 404 em rotas diretas)
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Permite omitir a extensão ao importar esses arquivos
    },
};