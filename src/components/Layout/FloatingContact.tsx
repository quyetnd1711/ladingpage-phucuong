import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaFacebookMessenger, FaPlus, FaTimes } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { socialLinks } from '../../data/content';

const FloatingContact: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactButtons = [
        {
            icon: SiZalo,
            label: 'Zalo',
            color: 'bg-blue-500 hover:bg-blue-600',
            link: socialLinks.zalo,
        },
        {
            icon: FaFacebookMessenger,
            label: 'Messenger',
            color: 'bg-blue-600 hover:bg-blue-700',
            link: socialLinks.messenger,
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 no-print">
            <div className="flex flex-col-reverse gap-3">
                {/* Scroll to Top */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={scrollToTop}
                            className="w-12 h-12 bg-[#601f1c] hover:bg-[#4d1916] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                            title="Scroll to top"
                        >
                            <FaArrowUp className="group-hover:animate-bounce" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Contact Buttons */}
                {isMobile ? (
                    <>
                        {/* Mobile: Expandable Menu */}
                        <AnimatePresence>
                            {isExpanded && (
                                <>
                                    {contactButtons.map((button, index) => (
                                        <motion.a
                                            key={button.label}
                                            href={button.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`w-12 h-12 ${button.color} text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110`}
                                            title={button.label}
                                        >
                                            <button.icon size={20} />
                                        </motion.a>
                                    ))}
                                </>
                            )}
                        </AnimatePresence>

                        {/* Toggle Button */}
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`w-12 h-12 ${isExpanded ? 'bg-[#601f1c]' : 'bg-[#366e42]'} hover:bg-[#366e42]/80 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isExpanded ? <FaTimes size={20} /> : <FaPlus size={20} />}
                        </motion.button>
                    </>
                ) : (
                    <>
                        {/* Desktop: Always Visible */}
                        {contactButtons.map((button, index) => (
                            <motion.a
                                key={button.label}
                                href={button.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className={`w-12 h-12 ${button.color} text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110`}
                                title={button.label}
                            >
                                <button.icon size={20} />
                            </motion.a>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default FloatingContact;
