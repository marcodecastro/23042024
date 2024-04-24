import React from 'react';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {
    const user = false;

    return user ? children : <Navigate to="/login" />;
    }


   