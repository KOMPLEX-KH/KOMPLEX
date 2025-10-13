import React from "react";
import { BookOpen } from "lucide-react-native";
import { TAILWIND_COLORS } from "./styles/tailwind-colors";
import Header from "@/components/common/Header";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

const renderHeader = (props: NativeStackHeaderProps) => {
  return React.createElement(Header, {
    title: props.options.headerTitle?.toString() || "មេរៀន",
    icon: React.createElement(BookOpen, {
      size: 16,
      color: TAILWIND_COLORS["indigo-600"],
    }),
  });
};

export const HEADER_CONFIG = {
  headerBackButtonDisplayMode: "minimal" as const,
  headerShown: true,
  contentStyle: {
    backgroundColor: "transparent",
    borderRadius: 0,
  },
  presentation: "card" as const,
  header: renderHeader,
};
