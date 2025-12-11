import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { featuredDishes } from '../../data/content';
import type { Dish } from '../../types';

const categories = ['Tất Cả', 'Bánh Tráng', 'Món Lẩu', 'Món Gà - Chim - Lợn'];

const FeaturedDishes: React.FC = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('Tất Cả');

    const filteredDishes = selectedCategory === 'Tất Cả'
        ? featuredDishes
        : featuredDishes.filter(dish => dish.category === selectedCategory);

    const handleDishClick = (dish: Dish) => {
        navigate(`/dish/${dish.id}`);
    };

    return (
        <section id="menu" className="section-padding bg-gradient-to-b from-transparent to-christmas-beige-200 overflow-hidden">
            <div className="container-custom px-3 sm:px-4 lg:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-christmas mb-3 sm:mb-4">
                        Món Ăn Nổi Bật
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
                        Khám phá những món ăn đặc sản được yêu thích nhất tại Phú Cường
                    </p>

                    {/* Category Filter - Scrollable on mobile */}
                    <div className="overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
                        <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center min-w-max sm:min-w-0">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                                        ? 'bg-[#601f1c] text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#366e42] hover:text-[#366e42]'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Dishes Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {filteredDishes.map((dish) => (
                        <Card
                            key={dish.id}
                            className="h-full flex flex-col cursor-pointer"
                            onClick={() => handleDishClick(dish)}
                        >
                            <div className="relative overflow-hidden group flex-shrink-0">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Bestseller Badge */}
                                {dish.isBestseller && (
                                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1">
                                        ⭐ Bán Chạy
                                    </div>
                                )}
                            </div>

                            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                                <h3
                                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2"
                                    title={dish.name}
                                >
                                    {dish.name}
                                </h3>

                                {/* Rating Stars */}
                                <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-xs sm:text-sm ${i < Math.floor(dish.rating)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                    <span className="text-xs sm:text-sm text-gray-500 ml-1">({dish.rating})</span>
                                </div>

                                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 flex-grow">
                                    {dish.description}
                                </p>

                                <div className="flex items-center justify-between gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
                                    <div className="flex flex-col flex-shrink-0">
                                        <span className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1 whitespace-nowrap">Giá chỉ từ</span>
                                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-christmas-red-600 whitespace-nowrap">
                                            {dish.price}
                                        </span>
                                    </div>
                                    <Button
                                        size="small"
                                        variant="secondary"
                                        className="flex-shrink-0 text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2"
                                        onClick={() => {
                                            handleDishClick(dish);
                                        }}
                                    >
                                        Xem Chi Tiết
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default FeaturedDishes;
