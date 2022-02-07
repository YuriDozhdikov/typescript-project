import React from "react";
import Login from "../pages/Login";
import Events from "../pages/Events";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RoutNames {
    LOGIN = '/login',
    EVENT = '/',
}

export const publicRoutes:IRoute[] = [
    {path: RoutNames.LOGIN, element: Login}
]

export const privateRoutes:IRoute[] = [
    {path: RoutNames.EVENT, element: Events}
]