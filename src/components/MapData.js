import React from 'react'
// import { MapContainer, TileLayer } from 'react-leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {showDataOnMap} from '../util';

function MapData({ countries, casesType, centerPoint, zoomPoint, }) {
    return (
        <div className="map">
            {casesType}
            <MapContainer
            className="markercluster-map"
            center={centerPoint}
            zoom={zoomPoint}
            maxZoom={15}
            minZoom={2}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* show circles     */}
            {
                showDataOnMap(countries,casesType)
            }

            </MapContainer>
        </div>
    )
}

export default MapData
