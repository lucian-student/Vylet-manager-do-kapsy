import React, { Fragment } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
function CurrentPossitionMarker({ position }) {
    return (
        <Fragment>
            {position && (
                <Marker
                    position={position}
                    interactive={true} >
                    <Tooltip>{position[0]} : {position[1]}</Tooltip>
                </Marker>
            )}
        </Fragment>
    )
}

export default CurrentPossitionMarker;