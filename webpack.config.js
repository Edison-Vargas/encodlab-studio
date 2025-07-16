/**
 * webpack.config.js
 *
 * Configuração principal do Webpack para:
 *  - Desenvolvimento (mode: 'development')
 *  - Build final (mode: 'production', ajustando publicPath se necessário)
 *
 * Principais responsabilidades:
 *  1. Definir entry/output
 *  2. Carregar e transpilar JS/JSX via Babel
 *  3. Processar CSS (Tailwind + PostCSS)
 *  4. Gerar index.html dinamicamente
 *  5. Servir conteúdo local com historyApiFallback para SPA
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 1. Ambiente de Build
    // 'development' ativa Sourcemaps, modo watch e compilação mais rápida
    // Trocar para 'production' na entrega final para minificação e otimizações

    mode: 'development', 

    // 2. Ponto de entrada da aplicação
    // Webpack vai começar a partir deste arquivo e resolver todas as dependências

    entry: './src/index.js', // Ponto de entrada do aplicativo React
    
    // 3. Destino dos arquivos gerados
    output: {
        path: path.resolve(__dirname, 'dist'), // Pasta absoluta onde o bundle (arquivo compilado) será emitido (ex: /projeto/dist)
        filename: 'bundle.js', // Nome do arquivo JavaScript final
        // Base path usado internamente pelo devServer e para roteamento
        publicPath: '/encodlab-studio/', // Necessário para o react-router-dom e devServer 
        clean: true, // Garante que a pasta 'dist' seja limpa antes de cada build
    },

    // 4. Transformações de módulos (loaders)
    module: {
        rules: [
            {
                // Babel para JS & JSX
                test: /\.(js|jsx)$/, // Regra para arquivos JavaScript e JSX
                exclude: /node_modules/, // Exclui a pasta node_modules e evita recompilar libs externas
                use: {
                    loader: 'babel-loader', // Usa o Babel para transpilar
                    options: {
                        // Presets para React e ESNext
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            {
                // Pipeline de CSS: tailwind.css, PostCSS e injeção no DOM
                test: /\.css$/, // Regra para arquivos CSS
                use: [
                    'style-loader',   // 1. Injeta CSS no DOM
                    'css-loader',     // 2. Resolve/Interpreta @import e url() como import/require()
                    'postcss-loader', // 3. Processa CSS com PostCSS (incluindo Tailwind), ou seja, aplica plugins (Tailwind, Autoprefixer)
                ],
            },
            
        ],
    },

    // 5. Plugins adicionais
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Template base para o index.html final
            filename: 'index.html', // Nome do arquivo que será criado em 'dist'
        }),
    ],
    
    // 6. Servidor de desenvolvimento
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Diretório onde estão os arquivos estáticos (HTML, bundle.js, etc.)
        },
        compress: true, // Habilita a compressão gzip para performance
        port: 3001, // Porta do servidor de desenvolvimento
        open: true, // Abre o navegador automaticamente
        historyApiFallback: true, // Para roteamento de SPA (evita erro 404 em rotas diretas). Importante para aplicações SPA: redireciona todas as rotas para index.html
    },

    // 7. Resolução de extensões
    resolve: {
        extensions: ['.js', '.jsx'], // Permite importar arquivos sem precisar especificar a extensão
    },
};