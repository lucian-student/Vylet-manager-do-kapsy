import React from 'react';
import MainPageContent from '../components/main/mainPageContent';
import { TripMapProvider } from '../context/tripMap';

function Main() {

    return (
        <TripMapProvider>
            <MainPageContent />
        </TripMapProvider>
    )
}

export default Main;