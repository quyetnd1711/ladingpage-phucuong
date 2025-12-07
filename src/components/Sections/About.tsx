import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../../data/content';

const About: React.FC = () => {
    // Split story into paragraphs for better readability
    const storyParagraphs = aboutContent.story.split('\n\n');

    return (
        <section id="about" className="section-padding bg-[#efebd4]">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gradient-christmas mb-4">
                        {aboutContent.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#601f1c] to-[#366e42] mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content Grid with Image and Story */}
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                    {/* Left Side - Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Main Image */}
                        <div className="relative group">
                            <img
                                src={aboutContent.image}
                                alt="Về Bánh Tráng Phú Cường"
                                className="rounded-2xl shadow-2xl w-full transform transition-transform duration-500 group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Right Side - Story Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                            <div className="prose prose-lg max-w-none">
                                {storyParagraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 leading-relaxed mb-6 text-justify"
                                        style={{ textIndent: index > 0 ? '2em' : '0' }}
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
