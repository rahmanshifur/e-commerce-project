import { Container, Row, Col } from "reactstrap";
import Sidebar from "../../components/layout/sidebar";
import { useStoreState } from 'easy-peasy';


function ProductDetail(props) {

    const pdtData = useStoreState(state => state.product.data)
    const selPdt = pdtData.filter(item => item.id === props.pdtId)[0]


    return (
        <section>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        <h1>{selPdt.title}</h1>
                        <p>{selPdt.price}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ProductDetail