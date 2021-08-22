import { Col, Container, Row } from "reactstrap"
import Sidebar from './../../components/layout/sidebar';

export default () => {
    return (
        <section id='home'>
            <Container>
                <Row>
                    <Col sm={3}><Sidebar /></Col>
                    <Col sm={9}> <div className='hello'>
                        <h1>Hello world</h1>
                    </div></Col>
                </Row>
            </Container>
        </section>
    )
}