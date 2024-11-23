import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '@/layouts/Wrapper';
import Mapa from '@/assets/img/mapa.png'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import './heritage.css'


const containerStyle = {
    width: '100vw',
    height: '100vh',
  }
  
  const center = {
    lat: -33.43,
    lng: -70.65,
  }

function Heritage() {
    //AIzaSyDk6EA6QCXPpwoCqJnNyf-EknfaOSmcNkM    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDk6EA6QCXPpwoCqJnNyf-EknfaOSmcNkM',
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )
    }
export default React.memo(Heritage)