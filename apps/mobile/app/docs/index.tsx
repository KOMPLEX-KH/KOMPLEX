import { Redirect } from "expo-router";
import { useEffect } from "react";

export default function DocsIndex() {
    useEffect(() => {
        // Redirect to the nested route with sample parameters
    }, []);

    return <Redirect href="/docs/grade-12/math/limits/zero-over-zero" />;
}