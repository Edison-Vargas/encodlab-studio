// src/JwtGenerator.jsx
import React from 'react';
import { sign, base64urlEncode, formatJSON, parseJSON } from '../utils/jwtUtils';
import { Button, Input, Textarea, Select, SelectTrigger, SelectContent, SelectItem, SelectValue, Alert, AlertTitle, AlertDescription } from './ui';

const SUPPORTED_ALGORITHMS = ['HS256', 'RS256', 'ES256'];
const DEFAULT_HEADER = {
    alg: 'HS256',
    typ: 'JWT',
};

const JwtGenerator = () => {
    const [header, setHeader] = React.useState(DEFAULT_HEADER);
    const [payload, setPayload] = React.useState({});
    const [algorithm, setAlgorithm] = React.useState('HS256');
    const [key, setKey] = React.useState('');
    const [token, setToken] = React.useState('');
    const [isGenerating, setIsGenerating] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleGenerate = React.useCallback(async () => {
        setIsGenerating(true);
        setToken('');
        setError(null);

        if (!key) {
            setError('Por favor, insira a chave para gerar o token.');
            setIsGenerating(false);
            return;
        }

        try {
            const parsedHeader = parseJSON(JSON.stringify(header));
            const parsedPayload = parseJSON(JSON.stringify(payload));

            if (!parsedHeader || !parsedPayload) {
                setError('Header ou Payload JSON inválido.');
                setIsGenerating(false);
                return;
            }

            const encodedHeader = base64urlEncode(JSON.stringify(parsedHeader));
            const encodedPayload = base64urlEncode(JSON.stringify(parsedPayload));
            const signature = await sign(parsedHeader, parsedPayload, algorithm, key);
            const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;
            setToken(jwt);
        } catch (err) {
            setError(`Erro ao gerar o token: ${err.message}`);
        } finally {
            setIsGenerating(false);
        }
    }, [header, payload, key, algorithm]);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2 font-heading">
                Gerador de JWT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="header" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Header (JSON):
                    </label>
                    <Textarea
                        id="header"
                        value={formatJSON(header)}
                        onChange={(e) => {
                            try {
                                setHeader(parseJSON(e.target.value));
                                setError(null);
                            } catch (err) {
                                setError('Formato JSON inválido para o Header.');
                            }
                        }}
                        rows="6"
                        className="font-mono"
                    />
                </div>
                <div>
                    <label htmlFor="payload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Payload (JSON):
                    </label>
                    <Textarea
                        id="payload"
                        value={formatJSON(payload)}
                        onChange={(e) => {
                            try {
                                setPayload(parseJSON(e.target.value));
                                setError(null);
                            } catch (err) {
                                setError('Formato JSON inválido para o Payload.');
                            }
                        }}
                        rows="6"
                        className="font-mono"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label htmlFor="algorithm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Algoritmo:
                    </label>
                    <Select value={algorithm} onValueChange={setAlgorithm}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione um algoritmo" />
                        </SelectTrigger>
                        <SelectContent>
                            {SUPPORTED_ALGORITHMS.map(alg => (
                                <SelectItem key={alg} value={alg}>{alg}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="key" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Chave (Secreta / Privada):
                    </label>
                    <Input
                        id="key"
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder={algorithm === 'HS256' ? 'Insira a chave secreta' : 'Insira a chave privada (texto completo)'}
                    />
                </div>
            </div>
            <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {isGenerating ? 'Gerando...' : 'Gerar Token JWT'}
            </Button>
            {error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {token && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center gap-1">Token JWT Gerado:</h3>
                    <Textarea
                        readOnly
                        value={token}
                        rows="6"
                    />
                </div>
            )}
        </div>
    );
};

export default JwtGenerator;