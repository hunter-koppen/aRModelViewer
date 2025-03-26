import { createElement } from "react";
import "@google/model-viewer";

export function ModelContainer() {
    return (
        <div className="model-viewer-container" style={{ height: "500px", width: "100%" }}>
            <model-viewer
                src="https://hunter-koppen.github.io/files/warmtepomp__panasonic_wc05h3e5.glb"
                ios-src="https://hunter-koppen.github.io/files/Warmtepomp__Panasonic_WC05H3E5.usdz"
                alt="A 3D model of an astronaut"
                ar
                camera-controls
                auto-rotate
                style={{ width: "100%", height: "100%" }}
            ></model-viewer>
        </div>
    );
}
