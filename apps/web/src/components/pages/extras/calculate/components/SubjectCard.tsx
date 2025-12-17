'use client';
import { motion, AnimatePresence } from "framer-motion";


export default function SubjectCard({ subject, value, onChange, index }) {
    return (

        <div style={{ borderColor: subject.color }}
            className="border-2 rounded-3xl shadow-sm w-full bg-white p-4 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <motion.div
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundColor: subject.color }}
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                >
                    <subject.icon className="w-7 h-7 text-white" />
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
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-full px-4 py-3 text-gray-800 text-lg focus:border-indigo-600 focus:outline-none transition-all"
                style={{
                    /* Remove default spinner/increment controls for Chrome, Safari, Edge, Opera, and Firefox */
                    MozAppearance: "textfield",
                }}
                // Hide up/down arrows in number inputs for Chrome, Safari, Edge, Opera
                inputMode="numeric"
                pattern="[0-9]*"
            />
            <style>
                {`
                    input[type=number]::-webkit-inner-spin-button,
                    input[type=number]::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type=number] {
                        -moz-appearance:textfield;
                    }
                `}
            </style>
        </div>
    );
}