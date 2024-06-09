import { APIProvider, Map } from "@vis.gl/react-google-maps"
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
export default function GoogleMaps() {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{width: '200px', height:'200px'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >

      </Map>
    </APIProvider>
  )
}