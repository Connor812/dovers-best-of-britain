import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const url = "https://localhost/dovers-best-of-britain/";

    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('userData') ? true : false);
    const navigate = useNavigate();

    function logout(e) {
        e.preventDefault();
        sessionStorage.removeItem('userData');
        setIsLoggedIn(false);
        navigate('/home');
    }

    useEffect(() => {
        if (isLoggedIn) {
            const userData = JSON.parse(sessionStorage.getItem('userData'));
            const loginTime = new Date(userData.timestamp);
            const currentTime = new Date();
            const hoursDifference = Math.abs(currentTime - loginTime) / 36e5;

            if (hoursDifference > 12) {
                sessionStorage.removeItem('userData');
                setIsLoggedIn(false);
                navigate('/login');
            }
        }
    }, [isLoggedIn]);

    return (
        <DataContext.Provider value={{ url, isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };