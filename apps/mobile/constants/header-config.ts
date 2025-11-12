import React from "react";
import {
  BookOpen,
  Bot,
  Video,
  MessageSquare,
  Library,
} from "lucide-react-native";
import { TAILWIND_COLORS } from "./styles/tailwind-colors";
import Header from "@/components/common/Header";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

const renderHeader = (props: NativeStackHeaderProps) => {
  const getIcon = () => {
    switch (props.options.headerTitle?.toString()) {
      case "មេរៀន":
        return React.createElement(BookOpen, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "តារា AI":
        return React.createElement(Bot, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "វីដេអូ":
        return React.createElement(Video, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "ពិភាក្សា":
        return React.createElement(MessageSquare, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "ជំនួយ":
        return React.createElement(Library, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      default:
        return null;
    }
    return null;
  };
  return React.createElement(Header, {
    title: props.options.headerTitle?.toString(),
    icon: getIcon(),
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
