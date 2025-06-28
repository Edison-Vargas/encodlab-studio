import React from 'react';

export const Button = ({ onClick, disabled, className, children }) => (
    <button onClick={onClick} disabled={disabled} className={`px-4 py-2 rounded-md transition-colors duration-200 ease-in-out ${className}`}>
        {children}
    </button>
);

export const Input = ({ id, type, className, value, onChange, placeholder }) => (
    <input
        id={id}
        type={type}
        className={`shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

export const Textarea = ({ id, className, value, onChange, placeholder, readOnly }) => (
    <textarea
        id={id}
        className={`shadow border rounded-md w-full py-2 px-3 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px] font-mono ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
    ></textarea>
);

export const Select = ({ onValueChange, value, children }) => {
    const handleChange = (e) => {
        onValueChange(e.target.value);
    };
    return (
        <select onChange={handleChange} value={value} className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 dark:bg-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {children}
        </select>
    );
};

export const SelectTrigger = ({ children }) => <option disabled>{children}</option>;
export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
export const SelectValue = ({ placeholder }) => <>{placeholder}</>;

export const Alert = ({ variant, className, children }) => (
    <div className={`p-3 rounded-md flex items-center gap-2 ${variant === 'destructive' ? 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100 border border-red-400 dark:border-red-600' : ''} ${className}`}>
        {children}
    </div>
);

export const AlertTitle = ({ children }) => <h4 className="font-bold">{children}</h4>;
export const AlertDescription = ({ children }) => <p className="text-sm">{children}</p>;

export const cn = (...args) => args.filter(Boolean).join(' ');