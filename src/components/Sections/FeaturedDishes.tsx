import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { featuredDishes } from '../../data/content';
import type { Dish } from '../../types';

const categories = ['Tất Cả', 'Món Chính', 'Khai Vị'];

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
        <section id="menu" className="section-padding bg-gradient-to-b from-transparent to-christmas-beige-200">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-christmas mb-4">
                        Món Ăn Nổi Bật
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Khám phá những món ăn đặc sản được yêu thích nhất tại Phú Cường
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-[#601f1c] text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#366e42] hover:text-[#366e42]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Bestseller Badge */}
                                {dish.isBestseller && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                                        ⭐ Bán Chạy
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {dish.name}
                                </h3>

                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-sm ${i < Math.floor(dish.rating)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                    <span className="text-sm text-gray-500 ml-1">({dish.rating})</span>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                                    {dish.description}
                                </p>

                                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-auto">
                                    <div className="flex flex-col flex-shrink-0">
                                        <span className="text-xs text-gray-500 mb-1 whitespace-nowrap">Giá chỉ từ</span>
                                        <span className="text-xl md:text-2xl font-bold text-christmas-red-600 whitespace-nowrap">
                                            {dish.price}
                                        </span>
                                    </div>
                                    <Button
                                        size="small"
                                        variant="secondary"
                                        className="flex-shrink-0"
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
