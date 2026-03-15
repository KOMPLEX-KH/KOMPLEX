"use client";

import { BookOpen, Bot, MessageSquare, Video, Edit } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FEATURES = [
    {
        icon: BookOpen,
        title: "មេរៀន",
        href: "/docs",
        description:
            "សិក្សានិងស្រាវជ្រាវ ដោយមានមេរៀនងាយយល់ និងរូបភាពច្បាស់លាស់",
        color: "indigo",
        bgColor: "bg-indigo-50/80 dark:bg-indigo-950/50",
        borderColor: "border-indigo-600 dark:border-indigo-500",
        iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
        icon: Edit,
        title: "លំហាត់អនុវត្តន៍",
        description:
            "អនុវត្តលំហាត់ដើម្បីបង្កើនជំនាញ ដោះស្រាយបញ្ហា និងទទួលបានរបាយការណ៍ជាក់លាក់",
        color: "orange",
        bgColor: "bg-orange-50/80 dark:bg-orange-950/50",
        borderColor: "border-orange-600 dark:border-orange-500",
        iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
        icon: Bot,
        title: "តារា AI",
        href: "/ai",
        description:
            "ប្រើប្រាស់ តារា AI ជាអ្នកជួយសិក្សា ដោះស្រាយបញ្ហា និងផ្តល់ការណែនាំឆាប់រហ័ស",
        color: "blue",
        bgColor: "bg-blue-50/80 dark:bg-blue-950/50",
        borderColor: "border-blue-600 dark:border-blue-500",
        iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
        icon: MessageSquare,
        title: "ការពិភាក្សា",
        href: "/forums",
        description:
            "ចែករំលែកចំណេះដឹង សួរសំណួរ និងពិភាក្សាជាមួយសិស្សដទៃទៀត",
        color: "green",
        bgColor: "bg-green-50/80 dark:bg-green-950/50",
        borderColor: "border-green-600 dark:border-green-500",
        iconColor: "text-green-600 dark:text-green-400",
    },
    {
        icon: Video,
        title: "វីដេអូ",
        href: "/videos",
        description:
            "មើលវីដេអូសិក្សា ដែលពន្យល់អំពីគោលគំនិតសំខាន់ៗ និងមានលំហាត់អនុវត្តន៍ភ្ជាប់នឹងវីដេអូ",
        color: "red",
        bgColor: "bg-red-50/80 dark:bg-red-950/50",
        borderColor: "border-red-600 dark:border-red-500",
        iconColor: "text-red-600 dark:text-red-400",
    },
];


export default function Features() {
    return (
        <section id="features" className="py-20 px-5 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 scroll-m-14">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4">
                        មុខងារសំខាន់ៗ
                    </h2>

                </motion.div>

                <div className="flex flex-col gap-4 lg:gap-8">
                    {/* Top row - 3 items */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-center items-center">
                        {FEATURES.slice(0, 3).map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={` dark:bg-zinc-800/80 border ${feature.borderColor} ${feature.bgColor} rounded-3xl lg:p-8 p-4 shadow-lg transition-all duration-300 backdrop-blur-sm ${feature.href ? 'hover:scale-105 cursor-pointer' : 'hover:scale-105 cursor-default opacity-60'} w-full sm:flex-1`}
                                >
                                    {feature.href ? (
                                        <Link href={feature.href}>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                                whileHover={{ rotate: 360 }}
                                                className={`w-20 h-20 ${feature.bgColor} border-2 ${feature.borderColor}   rounded-full flex items-center justify-center mx-auto mb-5`}
                                            >
                                                <Icon size={32} className={feature.iconColor} />
                                            </motion.div>
                                            <h3 className="lg:text-2xl text-xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-center text-sm lg:text-base">
                                                {feature.description}
                                            </p>
                                        </Link>
                                    ) : (
                                        <>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                                className={`w-20 h-20 ${feature.bgColor} border-2 ${feature.borderColor} rounded-full flex items-center justify-center mx-auto mb-5`}
                                            >
                                                <Icon size={32} className={feature.iconColor} />
                                            </motion.div>
                                            <h3 className="lg:text-2xl text-xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-center text-sm lg:text-base">
                                                {feature.description}
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom row - 2 items centered */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-center items-center">
                        {FEATURES.slice(3, 5).map((feature, index) => {
                            const Icon = feature.icon;
                            const actualIndex = index + 3; // Adjust for delay calculation
                            return (
                                <motion.div
                                    key={actualIndex}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: actualIndex * 0.1 }}
                                    className={` dark:bg-zinc-800/80 border ${feature.borderColor} ${feature.bgColor} rounded-3xl lg:p-8 p-4 shadow-lg transition-all duration-300 backdrop-blur-sm ${feature.href ? 'hover:scale-105 cursor-pointer' : 'cursor-default opacity-60'} w-full sm:max-w-none lg:max-w-sm sm:flex-1`}
                                >
                                    {feature.href ? (
                                        <Link href={feature.href}>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: actualIndex * 0.1 + 0.2 }}
                                                whileHover={{ rotate: 360 }}
                                                className={`w-20 h-20 ${feature.bgColor} border-2 ${feature.borderColor} rounded-full flex items-center justify-center mx-auto mb-5`}
                                            >
                                                <Icon size={32} className={feature.iconColor} />
                                            </motion.div>
                                            <h3 className="lg:text-2xl text-xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-center text-sm lg:text-base">
                                                {feature.description}
                                            </p>
                                        </Link>
                                    ) : (
                                        <>
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: actualIndex * 0.1 + 0.2 }}
                                                className={`w-20 h-20 ${feature.bgColor} ${feature.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-5`}
                                            >
                                                <Icon size={32} className={feature.iconColor} />
                                            </motion.div>
                                            <h3 className="lg:text-2xl text-xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-center text-sm lg:text-base">
                                                {feature.description}
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}


