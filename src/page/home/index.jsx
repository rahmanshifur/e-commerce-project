import { Col, Container, Row } from "reactstrap"
import Sidebar from './../../components/layout/sidebar';

export default () => {
    return (
        <section id='home'>
            <Container>
                <Row>
                    <Col sm={3}><Sidebar /></Col>
                    <Col sm={9}> Hello World</Col>
                </Row>
            </Container>
        </section>
    )
}