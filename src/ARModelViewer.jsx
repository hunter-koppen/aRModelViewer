import { createElement } from "react";

import { ModelContainer } from "./components/ModelContainer";
import "./ui/ARModelViewer.css";

export function ARModelViewer({ sampleText }) {
    return <ModelContainer sampleText={sampleText} />;
}
