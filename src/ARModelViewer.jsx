import { createElement } from "react";

import { ModelContainer } from "./components/ModelContainer";
import "./ui/ARModelViewer.css";

export function ARModelViewer({ width, height }) {
    return <ModelContainer width={width} height={height} />;
}
