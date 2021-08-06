import { useStoreState } from 'easy-peasy';
import { Col, Container, Row } from "reactstrap";
import Sidebar from './../../components/layout/sidebar';

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
                            {pdtData.length > 0 && pdtData.map(pdt => pdt.subcategory_id === props.scatId && <div className="pdt-item" key={pdt.id}>
                                <h3>{pdt.title}</h3>
                                <h4>{pdt.price}</h4>
                                <h4>{pdt.vat}</h4>
                                <h4>{pdt.discount}</h4>

                                {/* color show */}
                                {clrData.length > 0 && clrData.map(clr => clr.id === pdt.colors && <h4 key={clr.id}>{clr.name}</h4>)}

                                {/* size show */}
                                {sizData.length > 0 && sizData.map(siz => siz.id === pdt.sizes && <h4 key={siz.id}>{siz.name}</h4>)}

                                {/* tag show */}
                                {tagData.length > 0 && tagData.map(tag => tag.id === pdt.tags && <h4 key={tag.id}>{tag.name}</h4>)}
                            </div>)}


                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ScatProduct