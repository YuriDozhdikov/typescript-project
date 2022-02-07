import {Layout, Menu, Row} from 'antd';
import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {RoutNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const router = useNavigate();
    const {logout} = useActions()
    const {isAuth, user} = useTypedSelector(state => state.auth);

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: "white"}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item onClick={logout} key={1}>Logout</Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => router(RoutNames.LOGIN)} key={1}>Login</Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
