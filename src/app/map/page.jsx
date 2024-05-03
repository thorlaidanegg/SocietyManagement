'use client'
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import Sidebar from '@/components/Sidebar';

const MapWithPolygon = () => {
  useEffect(() => {
    const initializeMap = async () => {
      // Dynamically import Leaflet to prevent server-side rendering issues
      const L = await import('leaflet');

      // Initialize custom icon for the marker
      const customIcon = new L.Icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
        iconSize: [32, 32],
      });

      // Define coordinates for the polygon
      const polygonCoords = [
        [30.3511, 76.3654],
    [30.3523, 76.3652],
    [30.3521, 76.3639],
    [30.3512, 76.3641],

      ];

      // Create the Leaflet map
      const map = L.map('map').setView([30.3521, 76.3639], 19);

      // Add the tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
      }).addTo(map);

      // Add the polygon to the map
      L.polygon(polygonCoords, { color: 'blue' }).addTo(map);

      // Add the marker to the map
      L.marker([30.3521, 76.3639], { icon: customIcon })
        .addTo(map)
        .bindPopup('Marker popup content');
    };

    initializeMap();
  }, []);

  const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {
    ssr: false, // Disable server-side rendering
  });

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div id="map" style={{ flex: 1 }}>
        <MapContainer center={[30.3521, 76.3639]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
          {/* Define the tile layer here */}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapWithPolygon;
