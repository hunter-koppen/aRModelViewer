import { createElement, useEffect, useState } from "react";
import "@google/model-viewer";

export function ModelContainer({ width, height, modelUrl, iosModelUrl, modelAlt, loadingContent }) {
    const [dimensions, setDimensions] = useState({ width: undefined, height: undefined });

    useEffect(() => {
        if (width?.value !== undefined && height?.value !== undefined) {
            setDimensions({
                width: width.value,
                height: height.value
            });
        }
    }, [width, height]);

    // Only render the model viewer if both URLs are available
    const shouldShowModel = modelUrl && iosModelUrl;

    return (
        <div className="model-viewer-container" style={dimensions}>
            {shouldShowModel ? (
                <model-viewer
                    src={modelUrl}
                    ios-src={iosModelUrl}
                    alt={modelAlt}
                    ar
                    ar-modes="scene-viewer quick-look"
                    ar-scale="fixed"
                    camera-controls
                    auto-rotate
                    style={{ width: "100%", height: "100%" }}
                ></model-viewer>
            ) : (
                <div className="model-loading">{loadingContent}</div>
            )}
        </div>
    );
}
