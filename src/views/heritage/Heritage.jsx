import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import './heritage.css'
import Iconzt from '@/assets/img/icon-zt.svg'
import Iconmh from '@/assets/img/icon-mh.svg'
import Iconmu from '@/assets/img/icon-mu.svg'

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: -33.438, // default latitude
  lng: -70.653, // default longitude
};
const options = {
  mapTypeControl: false,
  scrollwheel: true,
  zoomControl:true,
  streetViewControl: false,
  fullscreenControl: false,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.medical",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
  ]
}
const Heritage = () => {
  const navigate = useNavigate()
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDk6EA6QCXPpwoCqJnNyf-EknfaOSmcNkM',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  function handleMarkerClick(mpoi){
    navigate(mpoi)
  }
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
      >
        <MarkerF position={{lat: -33.4335, lng: -70.654}} icon={Iconmu} onClick={(e)=>handleMarkerClick('/estacion-mapocho')}/>
        <MarkerF position={{lat: -33.437, lng: -70.673}} icon={Iconzt} onClick={(e)=>handleMarkerClick('/yungay')}/>
        <MarkerF position={{lat: -33.4425, lng: -70.643}} icon={Iconmh} onClick={(e)=>handleMarkerClick('/santa-lucia')}/>
      </GoogleMap>
    </div>
  );
};

export default Heritage;