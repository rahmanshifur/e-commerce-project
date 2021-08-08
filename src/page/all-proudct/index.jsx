import { Container, Col, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Sidebar from './../../components/layout/sidebar';
import pdtImg from '../../assets/img/download.jpg'
import { Link } from '@reach/router';




function AllProduct() {
    return (
        <section>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <Card key={1} style={{ maxWidth: 250 }}>
                            <CardImg top width="100%" src={pdtImg} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Price:</CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Vat: </CardSubtitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Discount:</CardSubtitle>
                                <CardText>desc</CardText>
                                <Link to={`/product-details/${1}`}>Details</Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default AllProduct