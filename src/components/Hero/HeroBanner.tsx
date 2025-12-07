import React from 'react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

interface HeroBannerProps {
    id?: number;
    image: string;
    title: string;
    subtitle: string;
    cta?: string;
    ctaLink?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    image,
    title,
    subtitle,
    cta,
    ctaLink,
}) => {
    const handleCTAClick = () => {
        if (ctaLink) {
            const element = document.querySelector(ctaLink);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Check if link exists - allow clicks for any slide with a link
    const isClickable = !!ctaLink;

    return (
        <div
            className={`relative w-full h-full ${isClickable ? 'cursor-pointer' : ''}`}
            onClick={isClickable ? handleCTAClick : undefined}
        >
            {/* Background Image - Using img tag for better control */}
            <img
                src={image}
                alt={title || 'Hero banner'}
                className="absolute inset-0 w-full h-full object-contain"
                style={{ objectPosition: 'center' }}
            />

            {/* Overlay gradient for better text readability if title/subtitle exist */}
            {(title || subtitle) && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
            )}

            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-christmas-gold-500 to-transparent opacity-60" />

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-4">
                <div className="text-center max-w-5xl">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {title}
                    </motion.h1>

                    {/* Decorative divider */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center justify-center gap-3 mb-6"
                    >
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-christmas-gold-500" />
                        <div className="w-2 h-2 rounded-full bg-christmas-gold-500" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-christmas-gold-500" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl lg:text-3xl text-white/95 mb-10 drop-shadow-lg font-light leading-relaxed max-w-3xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>

                    {cta && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Button
                                size="large"
                                onClick={handleCTAClick}
                                className="text-xl px-10 py-5 shadow-2xl hover:shadow-christmas transform hover:-translate-y-1 transition-all duration-300"
                            >
                                {cta}
                                <span className="ml-2">→</span>
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-christmas-gold-500 to-transparent opacity-60" />
        </div>
    );
};

export default HeroBanner;
