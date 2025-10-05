import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {

  return (
    <MapContainer center={[-3.687914, -40.345637]} zoom={13} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-3.687914, -40.345637]}>
        <Popup>
          Sobral
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default App
