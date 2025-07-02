import React from 'react';
import { Textarea, Button, Alert, AlertTitle, AlertDescription } from './ui'; // Importe os componentes de UI

const Base64Converter = () => {
    const [inputText, setInputText] = React.useState('');
    const [outputText, setOutputText] = React.useState('');
    const [error, setError] = React.useState(null);

    // Função para codificar para Base64
    const handleEncode = () => {
        setError(null);
        try {
            // btoa() funciona bem para strings ASCII/Latin-1.
            // Para suporte completo a UTF-8, um pré-processamento seria necessário (e.g., encodeURIComponent)
            // mas para uma ferramenta "rápida e fácil" como o exemplo, btoa é o esperado.
            setOutputText(btoa(inputText));
        } catch (e) {
            setError(`Erro ao codificar: ${e.message}. Certifique-se de que o texto não contém caracteres fora do conjunto Latin-1.`);
            setOutputText('');
        }
    };

    // Função para decodificar de Base64
    const handleDecode = () => {
        setError(null);
        try {
            setOutputText(atob(inputText));
        } catch (e) {
            setError(`Erro ao decodificar: ${e.message}. Certifique-se de que o texto é um Base64 válido.`);
            setOutputText('');
        }
    };

    // Troca os textos de entrada e saída
    const handleSwap = () => {
        // Copia o valor atual de outputText para inputText
        setInputText(outputText);
        // Limpa o outputText, já que ele virou a nova entrada
        setOutputText('');
        setError(null);
    };

    return (
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                Decoder & Encoder Base64
            </h2>

            <div className="mb-4">
                <label htmlFor="base64Input" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Entrada:
                </label>
                <Textarea
                    id="base64Input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Cole seu texto ou Base64 aqui..."
                />
            </div>

            <div className="flex flex-col md:flex-row gap-2 mb-4">
                <Button
                    onClick={handleEncode}
                    className="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Codificar (Base64)
                </Button>
                <Button
                    onClick={handleDecode}
                    className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Decodificar (Base64)
                </Button>
                <Button
                    onClick={handleSwap}
                    className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Trocar Entrada/Saída
                </Button>
            </div>

            {error && (
                <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="mb-4">
                <label htmlFor="base64Output" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Saída:
                </label>
                <Textarea
                    id="base64Output"
                    value={outputText}
                    // REMOVIDO: readOnly
                    onChange={(e) => setOutputText(e.target.value)} // Adicionado onChange para permitir edição
                    placeholder="Resultado da codificação/decodificação aparecerá aqui..."
                />
            </div>
        </div>
    );
};

export default Base64Converter;