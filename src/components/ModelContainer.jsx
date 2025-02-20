import { createElement, useEffect, useState } from "react";
import "@google/model-viewer";

export function ModelContainer({ width, height }) {
    const [dimensions, setDimensions] = useState({ width: undefined, height: undefined });

    useEffect(() => {
        if (width?.value !== undefined && height?.value !== undefined) {
            setDimensions({
                width: width.value,
                height: height.value
            });
        }
    }, [width, height]);

    return (
        <div className="model-viewer-container" style={dimensions}>
            <model-viewer
                src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                alt="A 3D model of an astronaut"
                ar
                ar-modes="scene-viewer quick-look"
                ar-scale="fixed"
                camera-controls
                auto-rotate
                style={{ width: "100%", height: "100%" }}
            ></model-viewer>
        </div>
    );
}
