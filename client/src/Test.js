import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Geocode,{setDefaults,setKey} from 'react-geocode';

const MapComponent = () => {
  const [departureAddress, setDepartureAddress] = useState('');
  const [arrivalAddress, setArrivalAddress] = useState('');
  const [departurePosition, setDeparturePosition] = useState(null);
  const [arrivalPosition, setArrivalPosition] = useState(null);
  const [distance, setDistance] = useState(null);
  setDefaults({
    key: "AIzaSyBy8Hu5grYRbotaxsXQtsex0Agdc8BgCM4", // Your API key here.
    language: "en", // Default language for responses.
    region: "es", // Default region for responses.
  });
  setKey('AIzaSyBy8Hu5grYRbotaxsXQtsex0Agdc8BgCM4');
//   Geocode.setLanguage('en');
//   Geocode.setRegion('tn');

  const handleDepartureAddressChange = async (address) => {
    try {
      setDepartureAddress(address);
      const response = await Geocode.fromAddress(address);
      const { lat, lng } = response.results[0].geometry.location;
      setDeparturePosition([lat, lng]);
    } catch (error) {
      console.error('Error geocoding departure position:', error);
    }
  };

  const handleArrivalAddressChange = async (address) => {
    try {
      setArrivalAddress(address);
      const response = await Geocode.fromAddress(address);
      const { lat, lng } = response.results[0].geometry.location;
      setArrivalPosition([lat, lng]);
    } catch (error) {
      console.error('Error geocoding arrival position:', error);
    }
  };

  const handleSearchClick = () => {
    if (departurePosition && arrivalPosition) {
      const calculatedDistance = calculateDistance(departurePosition, arrivalPosition);
      setDistance(calculatedDistance);
    } else {
      console.warn('Please enter both departure and arrival positions.');
    }
  };

  const calculateDistance = (startPosition, endPosition) => {
    const [lat1, lon1] = startPosition;
    const [lat2, lon2] = endPosition;

    const R = 6371; // Earth's radius in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers

    return distance.toFixed(2); // Round to 2 decimal places
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  return (
    <div>
      {/* Input components for departure and arrival addresses */}
      <label>Departure:</label>
      <input
        type="text"
        value={departureAddress}
        onChange={(e) => handleDepartureAddressChange(e.target.value)}
      />

      <label>Arrival:</label>
      <input
        type="text"
        value={arrivalAddress}
        onChange={(e) => handleArrivalAddressChange(e.target.value)}
      />

      {/* Your map container */}
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers for departure and arrival positions */}
        {departurePosition && <Marker position={departurePosition}><Popup>Departure</Popup></Marker>}
        {arrivalPosition && <Marker position={arrivalPosition}><Popup>Arrival</Popup></Marker>}
      </MapContainer>

      {/* Display the calculated distance */}
      {distance && <p>Distance: {distance} km</p>}

      {/* Button to trigger actions based on the selected positions */}
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default MapComponent;
