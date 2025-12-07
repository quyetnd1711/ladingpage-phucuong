import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaLeaf, FaClock, FaTruck } from 'react-icons/fa';

const trustBadges = [
    {
        icon: FaAward,
        title: '15+ Năm',
        subtitle: 'Kinh Nghiệm',
        color: 'text-christmas-red-600',
    },
    {
        icon: FaLeaf,
        title: '100% Tươi',
        subtitle: 'Nguyên Liệu Sạch',
        color: 'text-christmas-green-600',
    },
    {
        icon: FaClock,
        title: 'Phục Vụ',
        subtitle: 'Hàng Ngày',
        color: 'text-christmas-gold-600',
    },
    {
        icon: FaTruck,
        title: 'Giao Hàng',
        subtitle: 'Tận Nơi',
        color: 'text-christmas-red-600',
    },
];

const TrustBadges: React.FC = () => {
    return (
        <section className="relative -mt-16 z-10 mb-12">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {trustBadges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 text-center hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className={`${badge.color} mb-3`}>
                                <badge.icon className="text-3xl md:text-4xl mx-auto" />
                            </div>
                            <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1">
                                {badge.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600">{badge.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
