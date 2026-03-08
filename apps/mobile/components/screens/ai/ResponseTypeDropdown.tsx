import React, { useMemo } from "react";
import { View } from "react-native";
import { AIResponseType } from "@core-types/api-types/ai";
import { tw } from "@/utils/styles";
import Dropdown2 from "@/components/common/DropDown2";

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
    style: {
        left?: number;
        top?: number;
        bottom?: number;
        right?: number;
        maxHeight?: number;
        maxWidth?: number;
    }
}

const ResponseTypeDropdown: React.FC<ResponseTypeDropdownProps> = ({
    value,
    onChange,
    options,
    disabled,
    variant = "default",
    className = "",
    style
}) => {
    // Convert ResponseTypeOption[] to DropDown2 OptionItem[]
    const dropdownData = useMemo(() => {
        return options.map((option) => ({
            id: option.id,
            value: option.name,
        }));
    }, [options]);

    // Get the selected value id
    const selectedId = useMemo(() => value.id, [value.id]);

    // Handle selection change
    const handleSelectionChange = (item: { id: string; value: string }) => {
        const selectedOption = options.find((opt) => opt.id === item.id);
        if (selectedOption) {
            onChange(selectedOption);
        }
    };

    return (
        <View style={tw(`relative flex-shrink-0 ${className}`)}>
            <Dropdown2
                data={dropdownData}
                onChange={handleSelectionChange}
                placeholder={value.name}
                selectedId={selectedId}
                style={style}
            />
        </View>
    );
};

export default ResponseTypeDropdown;
