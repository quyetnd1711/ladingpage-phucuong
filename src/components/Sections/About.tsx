import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../../data/content';

const About: React.FC = () => {
    // Split story into paragraphs for better readability
    const storyParagraphs = aboutContent.story.split('\n\n');

    return (
        <section id="about" className="section-padding bg-[#efebd4]">
            <div className="container-custom px-3 sm:px-4 lg:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-christmas mb-3 sm:mb-4">
                        {aboutContent.title}
                    </h2>
                    <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#601f1c] to-[#366e42] mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid with Image and Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start max-w-7xl mx-auto">
                    {/* Left Side - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {/* Main Image */}
                        <div className="relative group">
                            <img
                                src={aboutContent.image}
                                alt="Về Bánh Tráng Phú Cường"
                                className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full transform transition-transform duration-500 group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Right Side - Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
                            <div className="prose prose-sm sm:prose md:prose-lg max-w-none">
                                {storyParagraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-justify text-sm sm:text-base md:text-lg"
                                        style={{ textIndent: index > 0 ? '1.5em' : '0' }}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
