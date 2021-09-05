import { Col, Container, Row, Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import Sidebar from "../../components/layout/sidebar";
import pdtImg from '../../assets/img/mac-mini.jpg'
import { Link } from '@reach/router';
import { useStoreState, useStoreActions } from 'easy-peasy';


function AllProduct() {
    const pdtData = useStoreState(state => state.product.data)
    const addToCart = useStoreActions(action => action.cart.create)

    const addToCartHandler = pdt => {
        pdt.quantity = 1
        addToCart(pdt)
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9} className='d-flex'>
                        {pdtData.length > 0 && pdtData.map(pdt =>
                            <Card key={pdt.id} style={{ maxWidth: 250, marginRight: '8px ' }} >
                                <CardImg top width="100%" src={pdtImg} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{pdt.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Price :{pdt.price}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Vat :{pdt.vat}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Discount :{pdt.discount}</CardSubtitle>
                                    <CardText>{pdt.description}</CardText>
                                    <Link to={`/product-details/${pdt.id}`} className='btn btn-primary'>Details </Link>
                                    <Button className='ms-auto' onClick={() => addToCartHandler(pdt)}>Add to cart</Button>
                                </CardBody>
                            </Card>

                        )}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AllProduct