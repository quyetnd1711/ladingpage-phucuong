import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { faqItems } from '../../data/content';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-padding bg-transparent">
            <div className="container-custom px-3 sm:px-4 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-christmas mb-3 sm:mb-4">
                        Câu Hỏi Thường Gặp
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        Tìm câu trả lời cho những thắc mắc phổ biến về nhà hàng
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                            >
                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 pr-3 sm:pr-4">
                                    {item.question}
                                </h3>
                                <FaChevronDown
                                    className={`text-christmas-red-600 flex-shrink-0 text-xs sm:text-sm transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 sm:px-5 md:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
