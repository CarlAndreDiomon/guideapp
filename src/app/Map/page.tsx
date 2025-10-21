'use client';

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);

const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);

export default function Map() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold mb-4">Map</h1>
            <div className="w-[950px] h-[550px] rounded-lg shadow-md overflow-hidden">
                <MapContainer
                    center={[10.761762, 122.068803]}
                    zoom={13}
                    className="w-full h-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </main>
    );
}
