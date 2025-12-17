import React from "react";
import {
  BookOpen,
  Bot,
  Video,
  MessageSquare,
  Library,
  Edit,
  User,
  Info,
  Lock,
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
      case "ការពិភាក្សា":
        return React.createElement(MessageSquare, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "ជំនួយ":
        return React.createElement(Library, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "ព័ត៌មាន":
        return React.createElement(Info, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "បង្កើតការពិភាក្សា":
        return React.createElement(Edit, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "បង្កើតវីដេអូ":
        return React.createElement(Edit, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "ប្រវត្តិរូប":
        return React.createElement(User, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      case "ចូលទៅកាន់គណនី":
        return React.createElement(Lock, {
          size: 24,
          color: TAILWIND_COLORS["indigo-600"],
        });
      default:
        return null;
    }
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
