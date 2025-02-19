import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ARModelViewer.css";

export function ARModelViewer({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}
