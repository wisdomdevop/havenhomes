import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import React from 'react'

import "leaflet/dist/leaflet.css";


function Map(){
const position = [51.505, -0.09]

return(
    <div className="w-full h-screen">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
)
}

export default Map
        

