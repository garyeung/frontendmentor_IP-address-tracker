import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import marker from '../assets/images/icon-location.svg';
import Attribution from "./Attribution";

function Map({position = [40.68,-74.04]}: {position:LatLngExpression}) {
    const markerIcon =  new L.Icon({
          iconUrl: marker,
         iconSize: new L.Point(45, 55),
    })

    return (
      <>
        <MapContainer center={position} zoom={14} scrollWheelZoom={false} zoomControl={false} placeholder={<MapPlaceholder/>} className="w-full h-[70vh]">
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              <Attribution />
            </Popup>
          </Marker>
          <ChangeMapView coords={position}/>
        </MapContainer>
      </>
    );
}

function ChangeMapView({ coords }: {coords: LatLngExpression}) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}
function MapPlaceholder() {
  return (
    <p>
      Loading... 
      <noscript>You need to enable JavaScript to see this map.</noscript>
    </p>
  )
}

export default Map;