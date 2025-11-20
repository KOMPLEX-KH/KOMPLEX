"use client";

import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUp, PenTool } from "lucide-react";
import { AIResponseType } from "@/types/content/ai";

export interface ResponseTypeOption {
    id: AIResponseType;
    name: string;
    description: string;
}

interface ResponseTypeDropdownProps {
    value: ResponseTypeOption;
    onChange: (option: ResponseTypeOption) => void;
    options: readonly ResponseTypeOption[];
    disabled?: boolean;
    variant?: "compact" | "default";
    className?: string;
}

const OptionItem = React.memo(
    ({
        option,
        isSelected,
        isActive
    }: {
        option: ResponseTypeOption;
        isSelected: boolean;
        isActive: boolean;
    }) => {
        const baseClasses =
            "relative cursor-pointer select-none px-4 py-2 text-sm transition-colors duration-75 rounded-3xl";
        const selectedClasses = "bg-indigo-50 text-indigo-600 font-medium";
        const activeClasses = "bg-gray-50 text-gray-700";
        const defaultClasses = "text-gray-700";

        const className = isSelected
            ? `${baseClasses} ${selectedClasses}`
            : isActive
                ? `${baseClasses} ${activeClasses}`
                : `${baseClasses} ${defaultClasses}`;

        return (
            <div className={className}>
                <div className="text-sm font-medium">{option.name}</div>
                <div className="text-xs text-gray-500">{option.description}</div>
            </div>
        );
    }
);

OptionItem.displayName = "ResponseTypeDropdownOption";

const ResponseTypeDropdown: React.FC<ResponseTypeDropdownProps> = ({
    value,
    onChange,
    options,
    disabled,
    variant = "default",
    className = ""
}) => {
    const isCompact = variant === "compact";

    const buttonClasses = isCompact
        ? `flex items-center gap-2 px-2 py-2 border rounded-full focus:outline-none  transition-all ${disabled
            ? "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-50 border-indigo-600 text-indigo-600 hover:bg-indigo-100"
        }`
        : `flex items-center gap-1 px-3 py-2 border rounded-full focus:outline-none  transition-all ${disabled
            ? "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-indigo-50 border-indigo-600 text-indigo-600 hover:bg-indigo-100"
        }`;

    return (
        <div className={`relative flex-shrink-0 ${className}`}>
            <Listbox value={value} onChange={onChange} disabled={disabled}>
                <div className="relative">
                    <Listbox.Button className={buttonClasses}>
                        {<PenTool className="w-4 h-4 rotate-180 text-indigo-600" />}
                        <span className="text-xs font-medium">{value.name}</span>
                        <ChevronUp
                            size={14}
                            className={`transition-transform ui-open:rotate-180 ${disabled ? "text-gray-400" : "text-gray-500"
                                }`}
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-in"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Listbox.Options className="absolute bottom-full mb-2 left-0 w-48 p-2 bg-white rounded-3xl border border-gray-200 shadow-lg z-50 max-h-48 overflow-y-auto">
                            {options.map((option) => (
                                <Listbox.Option key={option.id} value={option}>
                                    {({ active, selected }) => (
                                        <OptionItem option={option} isActive={active} isSelected={selected} />
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default ResponseTypeDropdown;

