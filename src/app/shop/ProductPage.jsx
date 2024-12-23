'use client';
import React from 'react';
import Image from 'next/image';
import { CartIcon, EyeIcon, HeartIcon } from '@/assets/icons';
import { motion } from 'framer-motion';
import Start from '@/components/Start';
import { allProudcts } from '@/assets/products';

const ProductPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allProudcts.map((product, index) => (
                    <div
                        key={index}
                        className="w-full border relative group bg-white rounded-lg overflow-hidden shadow-sm"
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                            <Image
                                src={product.image}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                        {/* Product Details */}
                        <div className="p-4">
                            <p className="text-sm md:text-base font-[Poppins] text-gray-800 truncate">
                                {product.title}
                            </p>
                            <p className="text-lg md:text-xl font-medium text-gray-900 mt-2">
                                {product.price}
                            </p>
                            <div className="mt-2 mb-4">
                                <Start star={product.rating} />
                            </div>
                        </div>
                        {/* Cart Icon */}
                        <motion.div
                            className="absolute bottom-4 right-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Image src={CartIcon} alt="cart icon" className="w-6 h-6" />
                        </motion.div>
                        {/* Hover Icons */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-2">
                            <motion.div
                                className="w-10 h-10 bg-gray-200 rounded-full p-2 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Image src={EyeIcon} alt="Eye Icon" className="w-6 h-6" />
                            </motion.div>
                            <motion.div
                                className="w-10 h-10 bg-gray-200 rounded-full p-2 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Image src={HeartIcon} alt="Heart Icon" className="w-6 h-6" />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
