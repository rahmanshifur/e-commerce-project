import { Col, Container, Row } from "reactstrap"
import Sidebar from "../../components/layout/sidebar"
import { useStoreState } from 'easy-peasy';



function ScatProduct(props) {
    const scatData = useStoreState(state => state.subcategory.data)
    const pdtData = useStoreState(state => state.product.data)


    return (
        <section id='scat-product'>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Sidebar />
                    </Col>
                    <Col sm={9}>
                        {/* SUB CATEGORY NAME */}
                        <h2>{scatData.map(item => item.id === props.scatId && <span key={item.id}>{item.category} = {item.name}</span>)}</h2>

                        {/* PRODUCT SHOW */}
                        <div className="pdt-group">
                            <h2>List of Product in this Subcategory</h2>

                            {pdtData.length > 0 && pdtData.map(pdt => pdt.subcategory_id === props.scatId && <div className="pdt-item" key={pdt.id}>
                                <h3>{pdt.title}</h3>
                                <p>{pdt.price}</p>
                            </div>)}

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ScatProduct