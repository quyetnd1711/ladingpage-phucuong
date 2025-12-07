import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUtensils, FaStar, FaClock } from 'react-icons/fa';

interface Stat {
    icon: React.ComponentType<{ className?: string }>;
    value: number;
    suffix: string;
    label: string;
}

const stats: Stat[] = [
    {
        icon: FaClock,
        value: 15,
        suffix: '+',
        label: 'Năm Kinh Nghiệm',
    },
    {
        icon: FaUsers,
        value: 50,
        suffix: 'K+',
        label: 'Khách Hàng Hài Lòng',
    },
    {
        icon: FaUtensils,
        value: 100,
        suffix: '+',
        label: 'Món Ăn Đa Dạng',
    },
    {
        icon: FaStar,
        value: 4.9,
        suffix: '⭐',
        label: 'Đánh Giá Trung Bình',
    },
];

const CountUp: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (hasAnimated) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasAnimated(true);
                    const increment = end / (duration / 16);
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current * 10) / 10);
                        }
                    }, 16);

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={ref}>{count}</span>;
};

const StatsCounter: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-[#601f1c] to-[#4d1916] text-white py-12 md:py-16">", "StartLine": 82
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Con Số Ấn Tượng
                    </h2>
                    <p className="text-white/80">
                        Niềm tự hào của chúng tôi qua từng con số
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="mb-3">
                                <stat.icon className="text-4xl md:text-5xl mx-auto text-christmas-gold-400" />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold mb-2">
                                <CountUp end={stat.value} />
                                {stat.suffix}
                            </h3>
                            <p className="text-sm md:text-base text-white/90">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
