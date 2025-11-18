"use client";

import React, { forwardRef } from "react";

const PromptTextarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className = "", ...rest }, ref) => {
        const baseClasses = "w-full px-3 py-2 text-sm focus:outline-none resize-none bg-transparent border-none";
        const stateClasses = rest.disabled
            ? "placeholder-gray-300 text-gray-400 cursor-not-allowed"
            : "placeholder-gray-400";

        return (
            <textarea
                ref={ref}
                className={`${baseClasses} ${stateClasses} ${className}`}
                {...rest}
            />
        );
    }
);

PromptTextarea.displayName = "PromptTextarea";

export default PromptTextarea;

