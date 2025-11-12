import { View } from "react-native"
import { tw } from "@/utils/styles";
import { SelectList } from 'react-native-dropdown-select-list'
import { ChevronDown } from 'lucide-react-native';

interface DropdownItem {
    key: string;
    value: string;
}

interface DropdownProps {
    data: DropdownItem[];
    setSelected: (val: string | string[]) => void;
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
        dropdownStyles: tw(`text-xs absolute z-50 ${width} ${position}   bg-white/95 border border-indigo-500/20 rounded-3xl shadow-lg`),
        searchPlaceholder: "ស្វែងរក...",
        notFoundText: "គ្មានទិន្នន័យ",
        placeholderStyle: tw("text-gray-500 text-xs font-kh-medium"),
        selectedItemStyles: tw("bg-indigo-50 "),
        selectedTextStyles: tw("text-indigo-600 font-kh-medium"),
        disabledItemStyles: tw("bg-gray-50"),
        disabledTextStyles: tw("text-gray-400"),
    };

    if (multiple) {
        return (
            <SelectMultiple
                setSelected={setSelected}
                data={data}
                save="key"
                placeholder={placeholder}
                search={searchable}
                searchPlaceholder={commonStyles.searchPlaceholder}
                notFoundText={commonStyles.notFoundText}
                defaultOption={defaultOption}
                disabled={disabled}
                inputStyles={commonStyles.inputStyles}
                boxStyles={commonStyles.boxStyles}
                dropdownStyles={commonStyles.dropdownStyles}
                placeholderStyle={commonStyles.placeholderStyle}
                selectedItemStyles={commonStyles.selectedItemStyles}
                selectedTextStyles={commonStyles.selectedTextStyles}
                disabledItemStyles={commonStyles.disabledItemStyles}
                disabledTextStyles={commonStyles.disabledTextStyles}
                badgeStyles={tw("bg-indigo-600 rounded-full px-2 py-1")}
                badgeTextStyles={tw("text-white text-xs")}
                closeicon={<ChevronDown size={16} color="#6b7280" />}
                searchicon={<ChevronDown size={16} color="#6b7280" />}
                arrowicon={<ChevronDown size={16} color="#6b7280" />}
            />
        );
    }

    return (
        <SelectList
            setSelected={setSelected}
            data={data}
            save="key"
            placeholder={placeholder}
            search={searchable}
            searchPlaceholder={commonStyles.searchPlaceholder}
            notFoundText={commonStyles.notFoundText}
            defaultOption={defaultOption}
            inputStyles={commonStyles.inputStyles}
            boxStyles={commonStyles.boxStyles}
            dropdownStyles={commonStyles.dropdownStyles}
            closeicon={<ChevronDown size={16} color="#6b7280" />}
            searchicon={<ChevronDown size={16} color="#6b7280" />}
            arrowicon={<ChevronDown size={16} color="#6b7280" />}
        />
    );
}

