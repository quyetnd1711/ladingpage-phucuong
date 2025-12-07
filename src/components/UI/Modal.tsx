import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'medium',
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const sizeStyles = {
        small: 'max-w-md',
        medium: 'max-w-2xl',
        large: 'max-w-4xl',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`bg-white rounded-2xl shadow-2xl w-full ${sizeStyles[size]} max-h-[90vh] overflow-y-auto`}
                        >
                            {/* Header */}
                            {title && (
                                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <IoClose className="w-6 h-6 text-gray-600" />
                                    </button>
                                </div>
                            )}

                            {/* Body */}
                            <div className="p-6">
                                {children}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
