import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true,
    glass = false,
    onClick,
}) => {
    const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
    const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-105' : '';
    const glassStyles = glass ? 'glass-effect' : 'bg-white shadow-lg';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export default Card;
