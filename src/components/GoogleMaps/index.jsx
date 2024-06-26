import { APIProvider, AdvancedMarker, InfoWindow, Map, Marker, Pin } from "@vis.gl/react-google-maps"
import { useState } from "react"

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID

export default function GoogleMaps({ data, selected }) {
  const users = data
  // const [markerRef, marker] = useMarkerRef();
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  return (
    <div className="map-container">
      <h1 className="p-4">Google Maps</h1>

      {/* Google Map */}
      <APIProvider apiKey={apiKey}>
        <Map
          style={{width: '100vh', height:'80vh'}}
          defaultCenter={{lat: 22.54992, lng: 0}}
          defaultZoom={1}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={mapId}
        >
          {users.map((user) => (
            <>
              {/* Marker */}
              <Marker
                key={user.id}
                position={{
                  lat: Number(user.address.geo.lat),
                  lng: Number(user.address.geo.lng)
                }}
                onClick={(marker) => {
                  setSelectedElement(user);
                  setActiveMarker(marker);
                }}
              />
              {selected.length ? <>
                <AdvancedMarker position={{
                  lat: Number(selected[0].address.geo.lat),
                  lng: Number(selected[0].address.geo.lng)
                }}>
                  <Pin background={'#10b981'} glyphColor={'#000'} borderColor={'#000'}/>
                </AdvancedMarker>
              </> : ""}
            </>
          ))}
          {selectedElement ? (
            // Info Window
            <InfoWindow
              position={{
                lat: Number(selectedElement.address.geo.lat),
                lng: Number(selectedElement.address.geo.lng)
              }}
              visible={showInfoWindow}
              marker={activeMarker}
              onCloseClick={() => {
                setSelectedElement(null);
              }}
            >
              {/* Info Window content */}
              <div className="info-content p-4">
                <h2>{selectedElement.name}</h2>
                <span>City: {selectedElement.address.city}</span>
                <small>
                  lat: {selectedElement.address.geo.lat} / 
                  lng: {selectedElement.address.geo.lng}
                </small>
              </div>
            </InfoWindow>
          ) : null}
        </Map>
      </APIProvider>
      
    </div>
  )
}