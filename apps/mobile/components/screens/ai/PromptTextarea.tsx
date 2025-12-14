import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { tw } from "@/utils/styles";

interface PromptTextareaProps extends TextInputProps {
    className?: string;
    disabled?: boolean; 
}

const PromptTextarea = forwardRef<TextInput, PromptTextareaProps>(
    ({ className = "", disabled = false, ...rest }, ref) => {
        return (
            <TextInput
                ref={ref}
                style={tw(
                    `w-full py-2 bg-transparent border-none font-kh-medium ${disabled
                        ? "text-gray-400"
                        : "text-gray-900"
                    } ${className}`
                )}
                placeholderTextColor={disabled ? "#D1D5DB" : "#9CA3AF"}
                editable={!disabled}
                multiline
                autoFocus
                autoCorrect={false}
                autoCapitalize="none"
                spellCheck={false}
                {...rest}
            />
        );
    }
);

PromptTextarea.displayName = "PromptTextarea";

export default PromptTextarea;
