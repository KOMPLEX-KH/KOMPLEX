'use client';

import { useState } from "react";
import { Info } from "lucide-react";
import BetaDialog from "./BetaDialog";

interface LogoProps {
    isVertical?: boolean,
    size?: "xl" | "lg" | "md" | "sm",
    isLoading?: boolean,
    variant?: "default" | "light" | "dark",
    showText?: boolean,
    showBeta?: boolean
}

export const Logo = ({ isVertical = false, size = "md", isLoading = false, variant = "default", showText = true, showBeta = true }: LogoProps) => {
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



    return (
        <>
            <div className={`flex relative items-center justify-center ${currentSize.gap} ${isVertical ? 'flex-col' : 'flex-row'} ${isLoading ? 'opacity-70 animate-pulse' : ''}`}>
                {showBeta && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setIsBetaDialogOpen(true)
                        }}
                        className={`absolute flex items-center gap-1 ${isVertical ? '-top-4 right-0' : ' top-[4px] -right-14'} py-0.5 px-2 text-indigo-500 bg-indigo-500/10 border border-indigo-500 rounded-full hover:bg-indigo-500/20 transition-colors cursor-pointer`}
                    >
                        <span className="text-xs font-bold">Beta</span>
                    </button>
                )}
                <img src={currentVariant.logo} alt="logo" className={currentSize.image} />
                {showText && (
                    <div className="flex items-center justify-center gap-0">
                        <span className={`${currentSize.text} font-extrabold tracking-tight ${currentVariant.textColor}`}>KOM</span>
                        <span className={`${currentSize.text} font-extrabold tracking-tight ${currentVariant.textColor2}`}>PLEX</span>
                    </div>
                )}
            </div>

            {/* Beta Info Dialog */}
            {<BetaDialog isBetaDialogOpen={isBetaDialogOpen} setIsBetaDialogOpen={setIsBetaDialogOpen} />}
        </>
    );
};