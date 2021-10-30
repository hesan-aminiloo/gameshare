import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

console.log('MIAD', process.env.GOOGLE_MAPS_KEY);
  
const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBRcbfzm4DqEcMpqdb7iPaezK0XGk3MCFA&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ defaultZoom, defaultCenter, children, ...props }) => (
  <GoogleMap
    defaultZoom={defaultZoom}
    defaultCenter={defaultCenter}
    defaultOptions={{
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    }}
    {...props}
  >
    {children}
  </GoogleMap>
))

export default Map;
