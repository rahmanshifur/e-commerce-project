import { Col, Container, Row, CardTitle, CardSubtitle, CardText, CardBody } from "reactstrap";
import Sidebar from "../../components/layout/sidebar";
import { useStoreState } from 'easy-peasy';


function ProductDetails(props) {
    const pdtData = useStoreState(state => state.product.data)
    const selPdt = pdtData.filter(item => item.id === props.pdtId)[0]

    const clrData = useStoreState(state => state.color.data)
    const sizData = useStoreState(state => state.size.data)
    const tagData = useStoreState(state => state.tag.data)

    console.log(selPdt)
    return (
        <section>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <CardBody>
                            <Row>
                                <Col md={6}><h2>Image</h2></Col>
                                <Col md={6}>
                                    <CardTitle tag="h5">{selPdt.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Price :{selPdt.price}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Vat :{selPdt.vat}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Discount :{selPdt.discount}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Color :{
                                        clrData.length > 0 && clrData.map(clr => clr.id === selPdt.colors && <span key={clr.id}>{clr.name}</span>)
                                    }</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Size :{
                                        sizData.length > 0 && sizData.map(clr => clr.id === selPdt.sizes && <span key={clr.id}>{clr.name}</span>)
                                    }</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> Tag :{
                                        tagData.length > 0 && tagData.map(clr => clr.id === selPdt.tags && <span key={clr.id}>{clr.name}</span>)
                                    }</CardSubtitle>
                                    <hr />
                                    <CardText>{selPdt.description}</CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductDetails