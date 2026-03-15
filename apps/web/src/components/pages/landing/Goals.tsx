"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle, Rocket, Users, Globe } from "lucide-react";

const GOAL_LIST_ITEMS = [
    "ផ្តល់ជាមេរៀនឥតគិតថ្លៃ និងអាចរៀនដោយខ្លួនឯក",
    "ជួយឱ្យយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់",
    "ផ្តល់ជាមេរៀនអន្តរកម្ម និងរូបភាពច្បាស់លាស់",
    "បង្កើតសហគមន៍រៀនជាមួយគ្នា",
    "បើកចំហសម្រាប់ការរួមចំណែក និងពង្រីកមេរៀន"
];

export default function Goals() {
    return (
        <section id="goals" className="py-20 px-5 bg-bg text-foreground">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-foreground mb-4">គោលដៅរបស់យើង</h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        យើងចង់ជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំខ្មែរ
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-15"
                >
                    {/* Problem Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-surface-1 border border-border-subtle rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-101"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ rotate: 360 }}
                                className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white"
                            >
                                <Target size={24} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900">បញ្ហាបច្ចុប្បន្ន</h3>
                        </div>
                        <p className="text-muted leading-relaxed mb-6">
                            កម្ពុជាមានបញ្ហាជាច្រើនក្នុងប្រព័ន្ធអប់រំ ដែលសិស្សជាច្រើនពឹងផ្អែកលើការបង្រៀនឯកជន និងសៀវភៅសង្ខេបដែលត្រូវបង់ប្រាក់ដើម្បីយល់គោលគំនិតមូលដ្ឋាន។
                        </p>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-3"
                        >
                            {GOAL_LIST_ITEMS.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white">
                                        <CheckCircle size={16} />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Solution Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-surface-1 border border-border-subtle rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-101"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ rotate: 360 }}
                                className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white"
                            >
                                <Rocket size={24} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900">ដំណោះស្រាយរបស់យើង</h3>
                        </div>
                        <p className="text-muted leading-relaxed mb-6">
                            បង្កើតប្រព័ន្ធរៀន STEM ដែលឥតគិតថ្លៃ និងមានប្រសិទ្ធភាពសម្រាប់សិស្សខ្មែរ ដើម្បីជួយដោះស្រាយបញ្ហានៅក្នុងប្រព័ន្ធអប់រំ និងផ្តល់ជាជម្រីសឥតគិតថ្លៃជាមួយនឹងការរៀនដោយខ្លួនឯកដែលគាំទ្រការយល់ជ្រៅជាងការចងចាំដោយគ្មានការយល់។
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="grid grid-cols-2 gap-4 mt-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-green-100/50 rounded-xl p-4 text-center"
                            >
                                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-green-800">សហគមន៍រៀន</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-green-100/50 rounded-xl p-4 text-center"
                            >
                                <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <p className="text-sm font-semibold text-green-800">បើកចំហ</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}


