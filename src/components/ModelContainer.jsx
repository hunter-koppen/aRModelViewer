import { createElement, useEffect, useState, useRef } from "react";
import "@google/model-viewer";

export const ModelContainer = ({
    width,
    height,
    modelUrl,
    iosModelUrl,
    modelAlt,
    loadingContent,
    customArButton,
    openARView,
    arButtonContent
}) => {
    const [dimensions, setDimensions] = useState({ width: undefined, height: undefined });
    const modelViewerRef = useRef(null);

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
    const shouldShowArButton = customArButton === true;

    useEffect(() => {
        if (openARView?.value === true) {
            if (modelViewerRef.current && modelViewerRef.current.canActivateAR) {
                modelViewerRef.current.activateAR();
            }
            openARView.setValue(false);
        }
    }, [openARView]);

    return (
        <div className="model-viewer-container" style={dimensions}>
            {shouldShowModel ? (
                <model-viewer
                    ref={modelViewerRef}
                    src={modelUrl}
                    ios-src={iosModelUrl}
                    alt={modelAlt}
                    ar
                    ar-modes="scene-viewer quick-look"
                    ar-scale="fixed"
                    camera-controls
                    auto-rotate
                    style={{ width: "100%", height: "100%" }}
                >
                    {shouldShowArButton && <button slot="ar-button">{arButtonContent}</button>}
                </model-viewer>
            ) : (
                <div className="model-loading">{loadingContent}</div>
            )}
        </div>
    );
};
