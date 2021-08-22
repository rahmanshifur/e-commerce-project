import { Container, Row, Col } from 'reactstrap'
import Tab from './tab'
import Sidebar from '../../components/layout/sidebar'


function AdminOrder() {
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Sidebar />
                </Col>
                <Col sm={9}>
                    <Tab />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminOrder