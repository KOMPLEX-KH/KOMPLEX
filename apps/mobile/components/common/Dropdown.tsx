import { tw } from "@/utils/styles";
import { SelectList } from 'react-native-dropdown-select-list'
import { ChevronDown } from 'lucide-react-native';
import { useState } from "react";

interface DropdownItem {
    key: string;
    value: string;
}

interface DropdownProps {
    data: DropdownItem[];
    setSelected: (val: string | string[]) => void;
    selectedValue?: string;
    placeholder?: string;
    searchable?: boolean;
    multiple?: boolean;
    defaultOption?: DropdownItem;
    disabled?: boolean;
    position?: string;
    width?: string;
}

export const Dropdown = ({
    data = [
        { key: '1', value: 'Option 1' },
        { key: '2', value: 'Option 2' },
        { key: '3', value: 'Option 3' }
    ],
    setSelected,
    selectedValue,
    placeholder = "ជ្រើសរើស",
    searchable = false,
    multiple = false,
    defaultOption,
    disabled = false,
    position = " left-1/2 top-8",
    width = "w-24"
}: DropdownProps) => {

    const commonStyles = {
        inputStyles: tw("text-gray-700 text-xs font-kh-medium"),
        boxStyles: tw("bg-white/95 border border-indigo-500/20 rounded-full px-2 py-1 gap-1 flex items-center justify-between text-xs font-kh-medium"),
        dropdownStyles: tw(`text-xs absolute z-50 ${width} ${position}   bg-white/95 border border-indigo-500/20 rounded-3xl shadow-lg font-kh-medium`),
        dropdownItemStyles: tw(`font-kh-bold text-xs text-gray-700 px-3 py-1    bg-white my-1 mx-1  rounded-full line-clamp-1`),
        searchPlaceholder: "ស្វែងរក...",
        notFoundText: "គ្មានទិន្នន័យ",
        placeholderStyle: tw("text-gray-500 text-xs font-kh-medium px-3 py-2 bg-indigo-50 my-1 mx-1 border border-indigo-500/20 rounded-full"),
        selectedItemStyles: tw("bg-indigo-50 font-kh-medium py-1 px-3 my-1 mx-1 border border-indigo-500/20 rounded-full"),
        selectedTextStyles: tw("text-indigo-600 font-kh-medium"),
        disabledItemStyles: tw("bg-gray-50 font-kh-medium py-1 px-3 my-1 mx-1 border border-indigo-500/20 rounded-full"),
        disabledTextStyles: tw("text-gray-400 font-kh-medium"),
    };

    return (
        <SelectList
            setSelected={setSelected}
            data={data}
            save="key"
            placeholder={placeholder}
            search={searchable}
            searchPlaceholder={commonStyles.searchPlaceholder}
            notFoundText={commonStyles.notFoundText}
            dropdownItemStyles={commonStyles.dropdownItemStyles}
            defaultOption={
                selectedValue
                    ? data.find((d) => d.key === selectedValue) || defaultOption
                    : defaultOption
            }
            inputStyles={commonStyles.inputStyles}
            boxStyles={commonStyles.boxStyles}
            dropdownStyles={commonStyles.dropdownStyles}
            disabledItemStyles={commonStyles.disabledItemStyles}
            disabledTextStyles={commonStyles.disabledTextStyles}
        />
    );
}

