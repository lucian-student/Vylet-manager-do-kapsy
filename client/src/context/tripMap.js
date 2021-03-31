import React, { createContext, useState } from 'react';

export const TripMapContext = createContext();

export const TripMapProvider = ({ children }) => {
    const [tripMarkers, setTripMarkers] = useState([]);
    return (
        <TripMapContext.Provider value={{
            tripMarkers,
            setTripMarkers
        }}>
            {children}
        </TripMapContext.Provider>
    )
}