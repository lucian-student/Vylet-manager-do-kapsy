import React, { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerWrapper from './markerWrapper';
import Container from 'react-bootstrap/Container';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { TripMapContext } from '../../context/tripMap';
let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [35, 46],
    iconAnchor: [17, 46]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;
function MainPageContent() {
    const { setTripMarkers } = useContext(TripMapContext);
    return (
        <div className='firstCenterDiv'>
            <div className='secondCenterDiv'>
                <Container>
                    <Row>
                        <MapContainer
                            center={[50.095068, 14.323946]}
                            zoom={12}
                            scrollWheelZoom={false}
                            className='leaflet-container'
                            doubleClickZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MarkerWrapper />
                        </MapContainer>
                    </Row>
                    <Row>
                        <Button style={{ width: '100%' }} onClick={() => setTripMarkers([])}>Clear markers</Button>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MainPageContent;