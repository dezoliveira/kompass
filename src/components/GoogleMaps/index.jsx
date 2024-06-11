import { APIProvider, InfoWindow, Map, Marker } from "@vis.gl/react-google-maps"
import { useState } from "react"

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

export default function GoogleMaps({ data }) {
  const users = data
  // const [markerRef, marker] = useMarkerRef();
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="p-4">Google Maps</h1>
      <APIProvider apiKey={apiKey}>
        <Map
          style={{width: '100vh', height:'80vh'}}
          defaultCenter={{lat: 22.54992, lng: 0}}
          defaultZoom={1}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {users.map((user) => (
            <>
              <Marker
                key={user.id}
                position={{lat: Number(user.address.geo.lat), lng: Number(user.address.geo.lng)}}
                onClick={(marker) => {
                  setSelectedElement(user);
                  setActiveMarker(marker);
                }}
              />
            </>
          ))}
          {selectedElement ? (
            <InfoWindow
              position={{lat: Number(selectedElement.address.geo.lat), lng: Number(selectedElement.address.geo.lng)}}
              visible={showInfoWindow}
              marker={activeMarker}
              onCloseClick={() => {
                setSelectedElement(null);
              }}
            >
              <div className="flex flex-col items-center justify-center bg-slate-900 w-full rounded-lg h-40 text-white p-4">
                <h2>{selectedElement.name}</h2>
                <span>City: {selectedElement.address.city}</span>
                <small>lat: {selectedElement.address.geo.lat} / lng: {selectedElement.address.geo.lng}</small>
              </div>
            </InfoWindow>
          ) : null}
        </Map>
      </APIProvider>
    </div>
  )
}