import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { branches } from '../../data/content';

const Location: React.FC = () => {
    const [selectedBranch, setSelectedBranch] = React.useState(branches[0]);
    const [filterType, setFilterType] = React.useState<'all' | 'premium' | 'standard'>('all');

    const filteredBranches = branches.filter(branch => {
        if (filterType === 'all') return true;
        return branch.type === filterType;
    });

    return (
        <section id="location" className="section-padding bg-transparent">
            <div className="container-custom px-3 sm:px-4 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-christmas mb-3 sm:mb-4">
                        Vị Trí Nhà Hàng
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        Hệ thống {branches.length} chi nhánh trên toàn quốc
                    </p>
                </motion.div>

                {/* Filter Buttons - Scrollable on mobile */}
                <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 mb-6 sm:mb-8 scrollbar-hide">
                    <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 md:gap-4 min-w-max sm:min-w-0">
                        {[
                            { id: 'all', label: 'Tất Cả' },
                            { id: 'premium', label: 'Premium' },
                            { id: 'standard', label: 'Standard' }
                        ].map(type => (
                            <button
                                key={type.id}
                                onClick={() => setFilterType(type.id as any)}
                                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap ${filterType === type.id
                                    ? 'bg-[#601f1c] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#366e42] hover:text-[#366e42]'
                                    }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Branch List */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-3 sm:space-y-4 max-h-[300px] sm:max-h-[400px] lg:max-h-[600px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar order-2 lg:order-1"
                    >
                        {filteredBranches.map((branch) => (
                            <div
                                key={branch.id}
                                onClick={() => setSelectedBranch(branch)}
                                className={`p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 border-2 ${selectedBranch.id === branch.id
                                    ? 'bg-white border-christmas-red-500 shadow-md'
                                    : 'bg-white/50 border-transparent hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-1.5 sm:mb-2">
                                    <h3 className={`font-bold text-sm sm:text-base ${selectedBranch.id === branch.id ? 'text-christmas-red-600' : 'text-gray-900'
                                        }`}>
                                        {branch.name}
                                    </h3>
                                    {branch.type === 'premium' ? (
                                        <span className="text-[8px] sm:text-[10px] bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-1.5 sm:px-2 py-0.5 rounded-full font-bold shadow-md">
                                            PREMIUM
                                        </span>
                                    ) : (
                                        <span className="text-[8px] sm:text-[10px] bg-gradient-to-r from-blue-500 to-blue-600 text-white px-1.5 sm:px-2 py-0.5 rounded-full font-bold shadow-md">
                                            STANDARD
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                                    <div className="flex items-start gap-1.5 sm:gap-2">
                                        <FaMapMarkerAlt className="mt-0.5 sm:mt-1 flex-shrink-0 text-christmas-red-500 text-xs sm:text-sm" />
                                        <span className="line-clamp-2">{branch.address}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <FaPhone className="flex-shrink-0 text-christmas-green-500 text-xs sm:text-sm" />
                                        <span>{branch.phone}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Map & Detail */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-2"
                    >
                        <div className="bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
                            <iframe
                                key={selectedBranch.id}
                                src={selectedBranch.map}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map ${selectedBranch.name}`}
                                className="rounded-lg sm:rounded-xl"
                            />

                            {/* Selected Branch Info Overlay */}
                            <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-2 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border-l-4 border-christmas-red-600 transform transition-all duration-300 md:w-fit">
                                <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                                    {selectedBranch.name}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-1.5 sm:mb-2 line-clamp-1">{selectedBranch.address}</p>
                                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                                    <a href={`tel:${selectedBranch.phone}`} className="flex items-center gap-1 text-christmas-green-600 hover:underline">
                                        <FaPhone className="text-xs" /> {selectedBranch.phone}
                                    </a>
                                    <span className="flex items-center gap-1 text-christmas-gold-600">
                                        <FaClock className="text-xs" /> {selectedBranch.hours}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
