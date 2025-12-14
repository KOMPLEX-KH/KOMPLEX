import React, { useMemo } from "react";
import { View } from "react-native";
import { AIResponseType } from "@core-types/content/ai";
import { tw } from "@/utils/styles";
import { Dropdown } from "@/components/common/Dropdown";

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

const ResponseTypeDropdown: React.FC<ResponseTypeDropdownProps> = ({
    value,
    onChange,
    options,
    disabled,
    variant = "default",
    className = ""
}) => {
    // Convert ResponseTypeOption[] to DropdownItem[]
    const dropdownData = useMemo(() => {
        return options.map((option) => ({
            key: option.id,
            value: option.name,
        }));
    }, [options]);

    // Get the selected value key
    const selectedValue = useMemo(() => value.id, [value.id]);

    // Handle selection change
    const handleSelectionChange = (selectedKey: string | string[]) => {
        const key = Array.isArray(selectedKey) ? selectedKey[0] : selectedKey;
        const selectedOption = options.find((opt) => opt.id === key);
        if (selectedOption) {
            onChange(selectedOption);
        }
    };

    // Get default option
    const defaultOption = useMemo(() => {
        return dropdownData.find((item) => item.key === value.id) || dropdownData[0];
    }, [dropdownData, value.id]);

    return (
        <View style={tw(`relative flex-shrink-0 ${className}`)}>
            <Dropdown
                data={dropdownData}
                setSelected={handleSelectionChange}
                selectedValue={selectedValue}
                placeholder={value.name}
                searchable={false}
                disabled={disabled}
                defaultOption={defaultOption}
                width={variant === "compact" ? "w-24" : "w-32"}
            />
        </View>
    );
};

export default ResponseTypeDropdown;
