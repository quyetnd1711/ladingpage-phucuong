import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
    label?: string;
    error?: string;
    multiline?: boolean;
    rows?: number;
    options?: { value: string; label: string }[];
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    multiline = false,
    rows = 4,
    options,
    className = '',
    ...props
}) => {
    const baseStyles = 'w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-christmas-red-600 focus:ring-2 focus:ring-christmas-red-100 transition-all duration-200 outline-none';
    const errorStyles = error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : '';

    const renderInput = () => {
        if (options) {
            return (
                <select
                    className={`${baseStyles} ${errorStyles} ${className}`}
                    {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
                >
                    <option value="">Chọn...</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            );
        }

        if (multiline) {
            return (
                <textarea
                    rows={rows}
                    className={`${baseStyles} ${errorStyles} ${className} resize-none`}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            );
        }

        return (
            <input
                className={`${baseStyles} ${errorStyles} ${className}`}
                {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
        );
    };

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {label}
                </label>
            )}
            {renderInput()}
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default Input;
