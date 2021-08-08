import { useStoreState } from 'easy-peasy';
import { Col, Container, Row, Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import Sidebar from './../../components/layout/sidebar';
import pdtImg from '../../assets/img/mac-mini.jpg'
import { Link } from '@reach/router';

function ScatProduct(props) {
    const catData = useStoreState(state => state.category.data)
    const scatData = useStoreState(state => state.subcategory.data)
    const pdtData = useStoreState(state => state.product.data)
    const clrData = useStoreState(state => state.color.data)
    const sizData = useStoreState(state => state.size.data)
    const tagData = useStoreState(state => state.tag.data)
    return (
        <section id="scat-product">
            <Container>
                <Row>
                    <Col sm={3}><Sidebar /></Col>
                    <Col sm={9}>
                        {/* sub category name */}

                        <h2>{scatData.map(item => item.id === props.scatId && <span key={item.id}> {catData.map(cat => cat.id === item.category && <span key={cat.id}>{cat.name}</span>)} = {item.name}</span>)}</h2>

                        {/* PRODUCT SHOW */}

                        <div className="pdt-group">
                            <h2>List of product in this subcategory</h2>
                            {pdtData.length > 0 && pdtData.map(pdt => pdt.subcategory_id === props.scatId &&
                                <Card key={pdt.id} style={{ maxWidth: 250 }}>
                                    <CardImg src={pdtImg} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{pdt.title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted"> Price :{pdt.price}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted"> Vat :{pdt.vat}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted"> Discount :{pdt.discount}</CardSubtitle>
                                        <CardText>{pdt.description}</CardText>
                                        <Link to={`/product-details/${pdt.id}`} className='btn btn-primary'>Details </Link>
                                    </CardBody>
                                </Card>
                            )}


                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ScatProduct