// src/JwtDecoder.jsx
import React from 'react';
import { base64urlDecode, parseJSON, formatJSON } from '../utils/jwtUtils';
import { Alert, AlertTitle, AlertDescription, Textarea } from './ui'; // Componentes de UI

const JwtDecoder = () => {
    const [token, setToken] = React.useState('');
    const [header, setHeader] = React.useState(null);
    const [payload, setPayload] = React.useState(null);
    const [signature, setSignature] = React.useState('');
    const [error, setError] = React.useState(null);

    const handleTokenChange = React.useCallback((event) => {
        const newToken = event.target.value;
        setToken(newToken);
        setError(null); // Limpa erros anteriores ao digitar

        try {
            const parts = newToken.split('.');
            if (parts.length === 3) {
                const decodedHeader = parseJSON(base64urlDecode(parts[0]));
                const decodedPayload = parseJSON(base64urlDecode(parts[1]));
                setHeader(decodedHeader);
                setPayload(decodedPayload);
                setSignature(parts[2]);
            } else {
                setHeader(null);
                setPayload(null);
                setSignature('');
            }
        } catch (err) {
            setError(`Erro ao decodificar o token: ${err.message}`);
            setHeader(null);
            setPayload(null);
            setSignature('');
        }
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2 font-heading">
                Decodificador JWT
            </h2>
            <div className="mb-4">
                <label htmlFor="jwt-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Cole seu Token JWT:
                </label>
                <Textarea
                    id="jwt-input"
                    value={token}
                    onChange={handleTokenChange}
                    rows="6"
                    placeholder="Cole seu JSON Web Token aqui..."
                />
            </div>

            {error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertTitle>Erro na Decodificação</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {token && !error && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center gap-1">
                            Header
                        </h3>
                        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                            {formatJSON(header)}
                        </pre>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center gap-1">
                            Payload
                        </h3>
                        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                            {formatJSON(payload)}
                        </pre>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 flex items-center gap-1">
                            Signature
                        </h3>
                        <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-md text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                            {signature}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JwtDecoder;