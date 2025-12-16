import {
    View,
    TouchableOpacity,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useCallback, useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react-native";
import { tw } from "@/utils/styles";
import { Text } from "@/components/common/Text";

type OptionItem = {
    id: string;
    value: string;
};

interface DropDownProps {
    data: OptionItem[];
    onChange: (item: OptionItem) => void;
    placeholder: string;
    selectedId?: string;
    style: {
        left?: number;
        top?: number;
        bottom?: number;
        right?: number;
        maxHeight?: number;
        maxWidth?: number;
    }
}

export default function Dropdown({
    data,
    onChange,
    placeholder,
    selectedId,
    style,
}: DropDownProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);

    const [value, setValue] = useState("");
    const [id, setId] = useState("");

    const buttonRef = useRef<View>(null);

    // Initialize selected state from selectedId prop
    useEffect(() => {
        if (selectedId) {
            const selectedItem = data.find(item => item.id === selectedId);
            if (selectedItem) {
                setValue(selectedItem.value);
                setId(selectedItem.id);
            }
        } else if (placeholder && data.length > 0) {
            // Try to match placeholder with data
            const matchedItem = data.find(item => item.value === placeholder);
            if (matchedItem) {
                setValue(matchedItem.value);
                setId(matchedItem.id);
            }
        }
    }, [selectedId, placeholder, data]);

    const onSelect = useCallback((item: OptionItem) => {
        onChange(item);
        setValue(item.value);
        setId(item.id);
        setExpanded(false);
    }, [onChange]);
    return (
        <View
            ref={buttonRef}
            style={tw("self-start")}
        >
            <TouchableOpacity
                style={tw("bg-white/95 border border-indigo-500/20 rounded-full px-2 py-1 gap-1 flex-row items-center justify-between")}
                activeOpacity={0.8}
                onPress={toggleExpanded}
            >
                <Text style={tw("text-xs font-kh-medium text-gray-700")}>{value || placeholder}</Text>
                <ChevronDown size={14} color="#6B7280" />
            </TouchableOpacity>
            {expanded ? (
                <Modal visible={expanded} transparent>
                    <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
                        <View style={tw("p-5 justify-center items-center flex-1")}>
                            <View
                                style={[
                                    tw("absolute bg-white/95 border border-indigo-500/20 rounded-3xl shadow-lg px-2 py-1"),
                                    {
                                        ...style,
                                    },
                                ]}
                            >
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item) => item.id}
                                    data={data}
                                    renderItem={({ item }) => {
                                        const isSelected = id === item.id;
                                        return (
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                style={tw(`font-kh-bold text-xs px-2 py-2 my-1 mx-1 rounded-full ${isSelected
                                                    ? 'text-indigo-600'
                                                    : 'text-gray-700'
                                                    }`)}
                                                onPress={() => onSelect(item)}
                                            >
                                                <Text style={tw(`text-xs font-kh-medium ${isSelected ? 'text-indigo-600' : 'text-gray-700'
                                                    }`)}>{item.value}</Text>
                                            </TouchableOpacity>
                                        );
                                    }}
                                    ItemSeparatorComponent={() => null}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            ) : null}
        </View>
    );
}