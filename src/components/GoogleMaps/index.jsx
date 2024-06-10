import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
export default function GoogleMaps({ data }) {
  const users = data

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{width: '100vh', height:'80vh'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={1}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {users.map((user) => (
          <Marker
            key={user.id}
            position={{lat: Number(user.address.geo.lat), lng: Number(user.address.geo.lng)}}
          />
        ))}
      </Map>
    </APIProvider>
  )
}