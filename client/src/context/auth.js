import React, { useState, useCallback, useRef, useEffect } from 'react';
import { meQuery } from '../queries/users/me';
import { logoutFunction } from '../queries/users/logout';
import axios from 'axios';

/*
Ukladá v pameti data o uzivatelovi
*/
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const source = useRef(axios.CancelToken.source());
    useEffect(() => {
        const cancelToken = source.current;
        return () => {
            cancelToken.cancel('canceled');
        }
    }, []);
    const loginUser = useCallback(async () => {
        await meQuery(setCurrentUser, source.current);
    }, []);

    async function logout() {
        await logoutFunction(setCurrentUser, source.current);
    }
    return (
        <AuthContext.Provider
            value={{
                currentUser, loginUser, logout
            }}>
            {children}
        </AuthContext.Provider>
    );
};