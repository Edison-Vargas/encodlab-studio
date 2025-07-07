/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Projeto_JWT.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // Ou 'media' se você quiser que siga a preferência do sistema
    theme: {
        extend: {
            fontFamily: {
                'body': ['"Open Sans"', 'sans-serif'],   // Fonte para o corpo do texto (usando aspas duplas pois o nome tem espaço)
                'heading': ['Roboto', 'sans-serif'],     // Fonte para títulos
                poppins: ['Poppins', 'sans-serif'],      // Outra fonte
            },
            keyframes: {
                'slide-in': {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            },
            animation: {
                'slide-in': 'slide-in 0.3s ease-out forwards',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // Certifique-se de ter instalado este plugin: npm install -D @tailwindcss/typography
    ],
}