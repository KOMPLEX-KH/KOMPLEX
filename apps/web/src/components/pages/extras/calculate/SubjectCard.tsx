'use client';
import { motion } from "framer-motion";


export default function SubjectCard({ subject, value, onChange, index }) {
    const Icon = subject.icon;

    return (

        <div className="border-1 border-gray-300 rounded-3xl shadow-sm bg-white p-4 transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <motion.div
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                >
                    <Icon className="w-6 h-6 text-blue-500" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
            </div>
            <input
                type="number"
                min="0"
                max={subject.maxScore}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={`0 - ${subject.maxScore}`}
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-full px-4 py-3 text-gray-800 text-lg focus:outline-none"
                style={{
                    MozAppearance: "textfield",
                }}
                inputMode="numeric"
                pattern="[0-9]*"
            />
        </div>
    );
}