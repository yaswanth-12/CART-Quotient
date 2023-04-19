
let map;

async function initMap() {
    const position = { lat: -10.902921398237003, lng: 76.90062789486426 };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("googlemap"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "WiCyS Amrita Student Chapter",
    });
}
