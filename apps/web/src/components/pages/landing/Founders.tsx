"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const FOUNDERS = [
    {
        image: "/landing/founders/raksa.jpeg",
        contacts: [{
            type: "website",
            href: "https://raksa.netlify.app/"
        }, {
            type: "github",
            href: "https://github.com/RaksaOC"
        }],
        name: "អោយ ចន្ទ័រក្សា",
        role: "Full Stack Developer",
        color: "indigo",
        bgColor: "bg-indigo-50/80",
        borderColor: "border-indigo-600",
        iconColor: "text-indigo-600"
    },
    {
        image: "/landing/founders/vatana.jpg",
        name: "អ៊ុក វឌ្ឍនា",
        contacts: [{
            type: "github",
            href: "https://github.com/ouk-vatana"
        }],
        role: "Frontend Developer",
        color: "green",
        bgColor: "bg-green-50/80",
        borderColor: "border-green-600",
        iconColor: "text-green-600"
    },
    {
        image: "/landing/founders/rafat.jpg",
        name: "ម៉ាន អារ៉ាហ្វាត",
        contacts: [
            {
                type: "website",
                href: "https://rafat21.vercel.app"
            },
            {
                type: "github",
                href: "https://github.com/Ra-Fat"
            },
        ],
        role: "Frontend Developer",
        color: "blue",
        bgColor: "bg-blue-50/80",
        borderColor: "border-blue-600",
        iconColor: "text-blue-600"
    },
    {
        image: "/landing/founders/kimly.jpg",
        name: "ហាក់ គីមលី",
        contacts: [{
            type: "github",
            href: "https://github.com/Kim-ly25"
        }],
        role: "Frontend Developer",
        color: "purple",
        bgColor: "bg-purple-50/80",
        borderColor: "border-purple-600",
        iconColor: "text-purple-600"
    },
    {
        image: "/landing/founders/visal.jpg",
        name: "សៅ វិសាល",
        contacts: [{
            type: "github",
            href: "https://github.com/salxz696969"
        }],
        role: "Backend Developer",
        color: "red",
        bgColor: "bg-red-50/80",
        borderColor: "border-red-600",
        iconColor: "text-red-600"
    },
    {
        image: "/landing/founders/neitong.jpg",
        name: "កែវ ហេងណៃតុង",
        contacts: [{
            type: "github",
            href: "https://github.com/Neitong"
        }],
        role: "Frontend Developer",
        color: "orange",
        bgColor: "bg-orange-50/80",
        borderColor: "border-orange-600",
        iconColor: "text-orange-600"
    }
];

export default function Founders() {
    const getContactIcon = (type: string) => {
        switch (type) {
            case "github":
                return <Github className="w-5 h-5" />
            case "website":
                return <Globe className="w-5 h-5" />
            default:
                return <Github className="w-5 h-5" />
        }
    }
    return (
        <section id="founders" className="pb-20 px-5 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">ស្ថាបនិក</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4"
                >
                    {FOUNDERS.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${founder.bgColor} ${founder.borderColor} border-2 rounded-3xl lg:p-8 p-4 shadow-lg transition-all duration-300 backdrop-blur-sm hover:scale-101`}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className={`w-20 h-20 ${founder.bgColor} ${founder.borderColor} border-2 rounded-full flex items-center justify-center mx-auto mb-5 overflow-hidden`}
                            >
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                            </motion.div>
                            <h3 className="lg:text-2xl text-xl text-center font-bold text-gray-900 mb-2">{founder.name}</h3>
                            <div className={`${founder.iconColor} font-semibold lg:text-base text-sm mb-4 text-center`}>{founder.role}</div>
                            <div className="flex items-center justify-center gap-2">
                                {
                                    founder.contacts.map((contact, index) => (
                                        <Link href={contact.href} key={index} className="hover:text-indigo-600 transition-colors" target="_blank">
                                            {getContactIcon(contact.type)}
                                        </Link>
                                    ))
                                }
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}


