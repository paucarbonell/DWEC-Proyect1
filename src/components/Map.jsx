import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '20px'
};

const center = {
    lat: 39.60549804626014,
    lng: 2.6766121261603453
};

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDBhGVLnkiDI6SayW8v0WNfzNokaPvBCS4'
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            options={{ gestureHandling: 'greedy', disableDefaultUI: true }}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default Map;