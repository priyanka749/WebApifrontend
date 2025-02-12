// RealTimeLocation.js
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function RealTimeLocation() {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => setError(err.message),
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );

      // Cleanup function to stop watching position when component unmounts
      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setError("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <div>
      <h1>Real-Time Location Tracking</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.lat, location.lng]}>
            <Popup>You are here.</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default RealTimeLocation;
