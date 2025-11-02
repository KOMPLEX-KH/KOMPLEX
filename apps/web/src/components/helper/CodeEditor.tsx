'use client'






import { EDITOR_BOXES } from "@/configs/monaco-editor/boxes";
import { EDITOR_OPTIONS } from "@/configs/monaco-editor/options";
import { REACT_JSX_SHIM } from "@/configs/monaco-editor/reactJSXShim";
import { EDITOR_STYLE } from "@/configs/monaco-editor/style";
import { KOMPLEX_DARK_THEME } from "@/configs/monaco-editor/theme";
import { TOPIC_CONTENT_V3 } from "@/configs/monaco-editor/topicContentV3";
import { LUCIDE_ICONS } from "@/configs/monaco-editor/icons";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
}
export default function CodeEditor({ value, onChange }: CodeEditorProps) {

    const handleChange = (value: string | undefined) => {
        if (value) {
            onChange(value);
        }
    }
    return (
        <div className="relative h-full">
            {/* Preload fonts for better performance */}
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Fira+Code:wght@400;600&display=swap"
                as="style"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Fira+Code:wght@400;600&display=swap"
                rel="stylesheet"
            />
            <style jsx global>{EDITOR_STYLE}</style>
            <MonacoEditor
                onChange={handleChange}
                language="typescript"
                defaultLanguage="typescript"
                theme="komplexDark"
                height="100%"
                width="100%"
                value={value}
                beforeMount={(monaco) => {
                    // Define stunning dark theme
                    monaco.editor.defineTheme("komplexDark", KOMPLEX_DARK_THEME);

                    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
                        jsx: monaco.languages.typescript.JsxEmit.React,
                        jsxFactory: "React.createElement",
                        jsxFragmentFactory: "React.Fragment",
                        allowNonTsExtensions: true,
                        allowJs: true,
                        checkJs: false,
                        noEmit: true,
                        target: monaco.languages.typescript.ScriptTarget.ESNext,
                        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
                        strict: false,
                        noImplicitAny: false,
                        skipLibCheck: true,
                        allowSyntheticDefaultImports: true,
                        esModuleInterop: true,
                    });

                    /// React + JSX shim
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(
                        REACT_JSX_SHIM,
                        "file:///types/react-shim.d.ts"
                    );

                    // Custom TopicContent_V3 type as string
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(
                        TOPIC_CONTENT_V3,
                        "file:///types/topicContent.d.ts"
                    );
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(
                        EDITOR_BOXES,
                        "file:///types/boxes.d.ts"
                    );
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(
                        LUCIDE_ICONS,
                        "file:///types/icons.d.ts"
                    );
                }}

                options={EDITOR_OPTIONS}
                path="file:///editor.tsx"
            />
        </div>)
}