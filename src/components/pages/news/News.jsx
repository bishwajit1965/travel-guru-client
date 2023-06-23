import React, { useEffect, useRef } from "react";
const News = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    script.onload = () => {
      // Initialize the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
        zoom: 8,
      });

      // Add a marker to the map
      new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
        map,
        title: "San Francisco",
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

export default News;
