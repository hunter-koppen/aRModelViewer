import { createElement } from "react";
import "@google/model-viewer";

export function ModelContainer() {
    return (
        <div className="model-viewer-container" style={{ height: "500px", width: "100%" }}>
            <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                alt="A 3D model of an astronaut"
                ar
                camera-controls
                auto-rotate
                style={{ width: "100%", height: "100%" }}
            ></model-viewer>
        </div>
    );
}
