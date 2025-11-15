'use client';

import { useState, Fragment } from "react";
import { Info, X, CheckCircle2, Sparkles, Rocket, BookOpen, Users, Video, MessageSquare, Zap, AlertTriangle, Brain, GraduationCap, Calendar, Gamepad2, Facebook } from "lucide-react";
import { Dialog, Transition } from '@headlessui/react';
import Link from "next/link";

interface LogoProps {
    isVertical?: boolean,
    size?: "xl" | "lg" | "md" | "sm",
    isLoading?: boolean,
    variant?: "default" | "light" | "dark",
    showText?: boolean
}

export const Logo = ({ isVertical = false, size = "md", isLoading = false, variant = "default", showText = true }: LogoProps) => {
    const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false);

    // Size configurations
    const sizeConfig = {
        sm: {
            image: 'w-4 h-4',
            text: 'text-lg',
            gap: 'gap-1'
        },
        md: {
            image: 'w-5 h-5',
            text: 'text-2xl',
            gap: 'gap-2'
        },
        lg: {
            image: 'w-6 h-6',
            text: 'text-3xl',
            gap: 'gap-3'
        },
        xl: {
            image: 'lg:w-24 lg:h-24 w-16 h-16',
            text: 'lg:text-[70px] text-[40px]',
            gap: 'gap-0'
        }
    };

    const currentSize = sizeConfig[size];

    // Variant configurations
    const variantConfig = {
        default: {
            logo: "/logo.png",
            textColor: "text-indigo-500",
            textColor2: "text-black"
        },
        light: {
            logo: "/logo-2.png",
            textColor: "text-white",
            textColor2: "text-white"
        },
        dark: {
            logo: "/logo-3.png",
            textColor: "text-black",
            textColor2: "text-black"
        }
    };

    const currentVariant = variantConfig[variant];

    const betaFeatures = [
        {
            icon: BookOpen,
            title: "មេរៀនគណិតវិទ្យា",
            description: "មេរៀនពេញលេញសម្រាប់គណិតវិទ្យា គីមីវិទ្យា រូបវិទ្យា និងជីវវិទ្យាសម្រាប់ថ្នាក់ទី ១២"
        },
        {
            icon: MessageSquare,
            title: "ព័ត៌មានផ្លូវការ",
            description: "អាចបង្កើតប្រកាស ធ្វើមតិ និងចែករំលែកព័ត៌មានជាមួយសហគមន៍"
        },
        {
            icon: Video,
            title: "វីដេអូរៀន",
            description: "អាចបង្ហោះ សាកល្បង និងចែករំលែកវីដេអូបង្រៀនដោយសេរី"
        },
        {
            icon: Users,
            title: "គណនីអ្នកប្រើប្រាស់",
            description: "ចូលដោយប្រើ Google, Microsoft ឬ GitHub និងតាមដានមេឌៀរបស់អ្នក"
        },
        {
            icon: Brain,
            title: "តារា AI",
            description: "សួរអ្វីក៏បានអំពី STEM ជាមួយនឹងការឆ្លើយតបដែលប្ដូរភាសាបាន"
        },
    ];

    const futureFeatures = [
        {
            icon: Zap,
            title: "AI សម្រាប់ប្រធានបទ",
            description: "AI នឹងអាចឆ្លើយសំណួរសម្រាប់ប្រធានបទជាក់លាក់នីមួយៗ"
        },
        {
            icon: Sparkles,
            title: "លំហាត់អនុវត្ត",
            description: "លំហាត់ដែលត្រូវបានផ្ទៀងផ្ទាត់ ឬពិនិត្យដោយ AI"
        },
        {
            icon: Rocket,
            title: "កម្មវិធី Mobile",
            description: "ទាញយកកម្មវិធីសម្រាប់ iOS និង Android"
        },
        {
            icon: GraduationCap,
            title: "វីដេអូដែលផ្ដល់ដោយគ្រូ",
            description: "វីដេអូត្រូវបានចាត់ថ្នាក់ និងបង្ហោះដោយគ្រូ ឬអ្នកបង្រៀនដែលអាចទុកចិត្តបាន"
        },
        {
            icon: BookOpen,
            title: "មេរៀនដែលបានផ្ដល់ដោយអ្នកនិពន្ធ",
            description: "មេរៀនត្រូវបានកែសម្រួល និងនិពន្ធដោយអ្នកនិពន្ធដែលអាចទុកចិត្តបាន ប៉ុន្តែនៅតែរក្សាលក្ខណៈពិសេសដែលទាក់ទាញ"
        },
        {
            icon: GraduationCap,
            title: "ថ្នាក់ទាំងអស់ និងប្រធានបទធំៗ",
            description: "គោរពទាំងអស់ថ្នាក់ និងប្រធានបទជាច្រើនទៀតក្នុងការអប់រំឧត្តមសិក្សា"
        },
        {
            icon: Calendar,
            title: "ឧបករណ៍សម្រាប់និស្សិត",
            description: "កម្មវិធីផែនការ ការរំលឹក ការកត់ត្រា បណ្ណាល័យអេឡិចត្រូនិក និងបណ្ណាល័យមេឌៀសិក្សា"
        },
        {
            icon: Gamepad2,
            title: "មន្ទីរពិសោធន៍ស្មុគ្រស្មាញ",
            description: "មុខងារប្រភេទហ្គេម/មន្ទីរពិសោធន៍ដែលនិស្សិតរៀនតាមរយៈមន្ទីរពិសោធន៍ស្មុគ្រស្មាញបង្ហាញករណីប្រើប្រាស់ជាក់ស្ដែងនៃ STEM"
        },
    ];

    const limitations = [
        {
            title: "មេរៀនមិនទាន់ត្រូវបានផ្ទៀងផ្ទាត់ដោយអ្នកជំនាញ",
            description: "សិស្សត្រូវផ្ទៀងផ្ទាត់ជាមួយគ្រូដើម្បីធានាថាខ្លឹមសារត្រឹមត្រូវមុនពេលប្រើប្រាស់"
        },
        {
            title: "AI នឹងមានវិសាលភាពកំណត់",
            description: "AI នឹងយល់បានល្អប្រសើរ និងមានការកំណត់សំណួរកំឡុងពេលមួយ"
        },
        {
            title: "ល្បឿនកម្មវិធី និងការឆ្លើយតបរបស់ AI",
            description: "ល្បឿនកម្មវិធីនឹងត្រូវបានកែលម្អ និងការឆ្លើយតបរបស់ AI អាចយឺត"
        },
        {
            title: "មុខងារវីដេអូអាចផ្លាស់ប្ដូរយ៉ាងខ្លាំង",
            description: "មុខងារវីដេអូអាចផ្លាស់ប្ដូរយ៉ាងខ្លាំងនៅពេលអនាគត"
        },
        {
            title: "ទិន្នន័យអ្នកប្រើប្រាស់អាចត្រូវបានលុប",
            description: "ទិន្នន័យបច្ចុប្បន្នរួមមានប្រកាស និងខ្លឹមសារផ្សេងៗអាចត្រូវបានលុបនៅពេលចេញពី Beta"
        },
        {
            title: "កំហុសទូទៅ និងការបរាជ័យ",
            description: "កំហុសទូទៅ និងការបរាជ័យអាចកើតឡើងដោយសារតែនេះជាកំណែ Beta"
        },
        {
            title: "លក្ខខណ្ឌ និងគោលការណ៍",
            description: "លក្ខខណ្ឌ និងគោលការណ៍នឹងត្រូវបានបន្ថែមនៅពេលអនាគត"
        },
    ];

    return (
        <>
            <div className={`flex relative items-center justify-center ${currentSize.gap} ${isVertical ? 'flex-col' : 'flex-row'} ${isLoading ? 'opacity-70 animate-pulse' : ''}`}>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsBetaDialogOpen(true)
                    }}
                    className={`absolute flex items-center gap-1 ${isVertical ? '-top-4 right-1/8' : ' top-1 -right-18'} py-1 px-2 text-indigo-500 bg-indigo-500/10 border border-indigo-500 rounded-full hover:bg-indigo-500/20 transition-colors cursor-pointer`}
                >
                    <span className="text-xs font-bold">Beta</span>
                    <Info className="w-4 h-4" />
                </button>
                <img src={currentVariant.logo} alt="logo" className={currentSize.image} />
                {showText && (
                    <div className="flex items-center justify-center gap-0">
                        <span className={`${currentSize.text} font-extrabold tracking-tight ${currentVariant.textColor}`}>KOM</span>
                        <span className={`${currentSize.text} font-extrabold tracking-tight ${currentVariant.textColor2}`}>PLEX</span>
                    </div>
                )}
            </div>

            {/* Beta Info Dialog */}
            <Transition appear show={isBetaDialogOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setIsBetaDialogOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all">
                                    <div className="relative bg-indigo-600  px-6 py-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                                    <Sparkles className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <Dialog.Title as="h3" className="text-2xl font-bold text-white">
                                                        ស្វាគមន៍មកកាន់ KOMPLEX Beta
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setIsBetaDialogOpen(false)}
                                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                            >
                                                <X className="w-5 h-5 text-white" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="px-6 py-6 space-y-8 max-h-[70vh] overflow-y-auto">
                                        {/* Current Beta Features */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <h4 className="text-lg font-semibold text-gray-900">លក្ខណៈពិសេសបច្ចុប្បន្ន</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {betaFeatures.map((feature, index) => {
                                                    const Icon = feature.icon;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="p-4 bg-indigo-50 rounded-3xl border border-indigo-100 hover:border-indigo-300 transition-colors"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="p-2 bg-indigo-500 rounded-full">
                                                                    <Icon className="w-5 h-5 text-white" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h5 className="font-semibold text-gray-900 mb-1">
                                                                        {feature.title}
                                                                    </h5>
                                                                    <p className="text-sm text-gray-600">
                                                                        {feature.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Coming Soon Features */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <Rocket className="w-5 h-5 text-indigo-500" />
                                                <h4 className="text-lg font-semibold text-gray-900">នឹងមកដល់ឆាប់ៗ</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {futureFeatures.map((feature, index) => {
                                                    const Icon = feature.icon;
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="p-4 bg-indigo-50 rounded-3xl border border-indigo-100 hover:border-indigo-300 transition-colors opacity-75"
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <div className="p-2 bg-indigo-500 rounded-full">
                                                                    <Icon className="w-5 h-5 text-white" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <h5 className="font-semibold text-gray-900">
                                                                            {feature.title}
                                                                        </h5>
                                                                        <span className="text-xs px-2 py-0.5 bg-indigo-200 text-indigo-700 rounded-full font-medium">
                                                                            ឆាប់ៗ
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-sm text-gray-600">
                                                                        {feature.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Limitations Section */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <AlertTriangle className="w-5 h-5 text-amber-500" />
                                                <h4 className="text-lg font-semibold text-gray-900">កំណត់សម្គាល់ និងការកំណត់</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {limitations.map((limitation, index) => (
                                                    <div
                                                        key={index}
                                                        className="p-4 bg-amber-50 rounded-3xl border border-amber-200 hover:border-amber-300 transition-colors"
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 bg-amber-500 rounded-full flex-shrink-0">
                                                                <AlertTriangle className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <h5 className="font-semibold text-gray-900 mb-1">
                                                                    {limitation.title}
                                                                </h5>
                                                                <p className="text-sm text-gray-600">
                                                                    {limitation.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Footer Note */}
                                        <div className="pt-4 border-t border-gray-200">
                                            <Link
                                                href="https://www.facebook.com/profile.php?id=61579280685130"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                                            >
                                                <Facebook className="w-4 h-4" />
                                                <span>តាមដានវឌ្ឍនភាពរបស់យើងនៅទំព័រ Facebook</span>
                                            </Link>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};