import { useState } from "react"
import { Button, Col, Container, Form, Input, Row } from "reactstrap"
import { useStoreActions, useStoreState } from 'easy-peasy';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createLogin = useStoreActions(action => action.auth.login)
    const users = useStoreState(state => state.user.data)

    const submitHandler = e => {
        e.preventDefault()

        createLogin({
            email: email,
            password: password,
            users

        })
        // setEmail('')
        // setPassword('')

    }

    return (
        <Container>
            <Row className='text-center'>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <h2> Login</h2>
                    <Form onSubmit={submitHandler}>
                        <Input
                            type='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type='submit' >Submit</Button>
                    </Form>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    )
}
export default Login