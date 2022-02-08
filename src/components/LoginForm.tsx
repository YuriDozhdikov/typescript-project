import {Button, Form, Input, Row} from 'antd';
import React, {FC, useState} from 'react';
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useActions();

    const submit = () => {
        login(username, password);
    }
    return (
        <Form name="basic"
              labelCol={{span: 8}}
              wrapperCol={{span: 16}}
              initialValues={{remember: true}}
              autoComplete="off"
              onFinish={submit}>
            {error && <div style={{color: "red"}}>{error}</div>}
            <Form.Item
                label="Name"
                name="username"
                rules={[rules.required("Please enter your name")]}
            >
                <Input value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required("Please enter your password")]}
            >
                <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Login
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default LoginForm;