import { createElement } from "react";

import { ModelContainer } from "./components/ModelContainer";
import "./ui/ARModelViewer.css";

export function ARModelViewer(props) {
    return (
        <ModelContainer
            width={props.width}
            height={props.height}
            modelUrl={props.modelUrl?.value}
            iosModelUrl={props.iosModelUrl?.value}
            modelAlt={props.modelAlt?.value}
            loadingContent={props.loadingContent}
            openARView={props.openARView}
            customArButton={props.customArButton}
            arButtonContent={props.arButtonContent}
        />
    );
}
