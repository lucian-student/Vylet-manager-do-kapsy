import React, { Fragment, useContext } from 'react';
import { useMapEvents } from 'react-leaflet';
import CurrentPositionMarker from './CurrentPositionMarker';
import { TripMapContext } from '../../context/tripMap';
function MarkerWrapper() {
    const { tripMarkers, setTripMarkers } = useContext(TripMapContext);
    useMapEvents({
        dblclick(event) {
            const { lat, lng } = event.latlng;
            setTripMarkers(oldMarkers => { return [{ position: [lat, lng] }, ...oldMarkers] });
        }
    });
    return (
        <Fragment>
            {tripMarkers.map((item, index) => (
                <div key={index}>
                    <CurrentPositionMarker position={item.position} />
                </div>
            ))}
        </Fragment>
    )
}

export default MarkerWrapper;