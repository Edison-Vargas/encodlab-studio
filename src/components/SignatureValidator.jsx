// src/SignatureValidator.jsx
import React from 'react';
import { verifySignature } from '../utils/jwtUtils';
import { Button, Input, Textarea, Select, SelectTrigger, SelectContent, SelectItem, SelectValue, Alert, AlertTitle, AlertDescription, cn } from './ui';

const SUPPORTED_ALGORITHMS = ['HS256', 'RS256', 'ES256'];

const SignatureValidator = () => {
    const [token, setToken] = React.useState('');
    const [algorithm, setAlgorithm] = React.useState('HS256');
    const [key, setKey] = React.useState('');
    const [isValid, setIsValid] = React.useState(null);
    const [isVerifying, setIsVerifying] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleVerify = React.useCallback(async () => {
        setIsVerifying(true);
        setIsValid(null); // Reseta o estado anterior
        setError(null);

        if (!token) {
            setError('Por favor, insira um token JWT.');
            setIsVerifying(false);
            return;
        }
        if (!key) {
            setError('Por favor, insira a chave para verificação.');
            setIsVerifying(false);
            return;
        }

        try {
            const result = await verifySignature(token, key, algorithm);
            setIsValid(result);
        } catch (err) {
            setError(`Erro ao verificar a assinatura: ${err.message}`);
            setIsValid(false); // Considera inválido em caso de erro na verificação
        } finally {
            setIsVerifying(false);
        }
    }, [token, key, algorithm]);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2 font-heading">
                Validador de Assinatura JWT
            </h2>
            <div className="mb-4">
                <label htmlFor="token-validator-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Token JWT:
                </label>
                <Textarea
                    id="token-validator-input"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    rows="6"
                    placeholder="Cole o JWT a ser validado..."
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label htmlFor="algorithm-validator" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                    <label htmlFor="key-validator" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Chave (Secreta / Pública):
                    </label>
                    <Input
                        id="key-validator"
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder={algorithm === 'HS256' ? 'Insira a chave secreta' : 'Insira a chave pública (texto completo)'}
                    />
                </div>
            </div>
            <Button
                onClick={handleVerify}
                disabled={isVerifying}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                {isVerifying ? 'Verificando...' : 'Verificar Assinatura'}
            </Button>
            {error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            {isValid !== null && (
                <div
                    className={cn( // 'cn' é importado de 'ui'
                        'mt-4 p-3 rounded-md flex items-center gap-2',
                        isValid
                            ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100 border border-green-400 dark:border-green-600'
                            : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100 border border-red-400 dark:border-red-600'
                    )}
                >
                    <span>
                        {isValid ? 'Assinatura Válida!' : 'Assinatura Inválida!'}
                    </span>
                </div>
            )}
        </div>
    );
};

export default SignatureValidator;