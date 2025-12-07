import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    loading = false,
    children,
    className = '',
    disabled,
    ...props
}) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2';

    const variantStyles = {
        primary: 'bg-[#601f1c] text-white shadow-lg hover:bg-[#4d1916] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        secondary: 'border-2 border-[#366e42] text-[#366e42] hover:bg-[#366e42] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
        ghost: 'text-[#601f1c] hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed',
        outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
    };

    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {children}
        </button>
    );
};

export default Button;
