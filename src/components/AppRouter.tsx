import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes, RoutNames} from "../routes";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element/>}/>)
                }
                <Route path="*" element={<Navigate to={RoutNames.EVENT} />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element/>}/>)
                }
                <Route path="*" element={<Navigate to={RoutNames.LOGIN} />} />
            </Routes>
    );
};

export default AppRouter;