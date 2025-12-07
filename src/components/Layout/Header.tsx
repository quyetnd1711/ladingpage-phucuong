import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../UI/Button';
import ChristmasLights from '../Effects/ChristmasLights';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Shorter menu items for compact header
    const menuItems = [
        { label: 'Trang Chủ', href: '#home' },
        { label: 'Thực Đơn', href: '#menu' },
        { label: 'Giới Thiệu', href: '#about' },
        { label: 'Không Gian', href: '#gallery' },
        { label: 'Đánh Giá', href: '#reviews' },
        { label: 'Liên Hệ', href: '#location' },
    ];

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#601f1c] shadow-lg' : 'bg-transparent'
                }`}
        >
            {/* Christmas Lights */}
            {!isScrolled && <ChristmasLights />}

            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center cursor-pointer"
                        onClick={() => handleNavClick('#home')}
                    >
                        <img
                            src="/images/logo-header.jpg"
                            alt="Phú Cường Logo"
                            className={`transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'}`}
                        />
                    </motion.div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-4">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`font-semibold transition-colors text-base ${isScrolled
                                    ? 'text-[#efebd4] hover:text-white'
                                    : 'text-[#efebd4] hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Hotline Button - More compact */}
                        <a
                            href="tel:1900636569"
                            className={`hidden xl:flex items-center gap-1 px-3 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${isScrolled
                                ? 'bg-[#efebd4] text-[#601f1c] hover:bg-white'
                                : 'bg-white/90 text-[#601f1c] hover:bg-white'
                                } shadow-lg hover:scale-105`}
                        >
                            <span>📞</span>
                            <span>1900 63 65 69</span>
                        </a>

                        <Button
                            size="small"
                            onClick={() => handleNavClick('#booking')}
                            className="bg-[#366e42] text-white border-none hover:bg-[#2d5c36] text-base px-4 shadow-lg"
                        >
                            Đặt Bàn
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 text-white`}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden bg-[#601f1c] border-t border-white/10"
                >
                    <nav className="container-custom py-4 space-y-3">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className="block w-full text-left py-2 text-[#efebd4] hover:text-white font-semibold transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                        <Button
                            size="small"
                            className="w-full bg-[#366e42] text-white hover:bg-[#2d5c36] shadow-lg"
                            onClick={() => handleNavClick('#booking')}
                        >
                            Đặt Bàn Ngay
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
