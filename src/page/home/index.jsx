import { Container, Row, Col } from "reactstrap"
import Sidebar from "../../components/layout/sidebar"


export default () => {
    return (
        <section id="home">
            <Container>
                <Row>
                    <Col sm={3}><Sidebar /></Col>
                    <Col sm={9}>
                        Hello world
                    </Col>
                </Row>
            </Container>
        </section>
    )
}