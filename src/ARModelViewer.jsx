import { createElement } from "react";

import { ModelContainer } from "./components/ModelContainer";
import "./ui/ARModelViewer.css";

export function ARModelViewer({ width, height, modelUrl, iosModelUrl, modelAlt, loadingContent }) {
    return (
        <ModelContainer
            width={width}
            height={height}
            modelUrl={modelUrl?.value}
            iosModelUrl={iosModelUrl?.value}
            modelAlt={modelAlt?.value}
            loadingContent={loadingContent}
        />
    );
}
