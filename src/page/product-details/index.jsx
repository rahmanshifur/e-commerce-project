import { useState } from 'react'
import { Col, Container, Row, CardTitle, CardSubtitle, CardText, CardBody, Input, Button } from "reactstrap";
import Sidebar from "../../components/layout/sidebar";
import { useStoreState, useStoreActions } from 'easy-peasy';
import pdtImg from '../../assets/img/mac-mini.jpg'


function ProductDetails(props) {
    const [quantity, setQuantity] = useState(1)

    const pdtData = useStoreState(state => state.product.data)
    const selPdt = pdtData.filter(item => item.id === props.pdtId)[0]
    const clrData = useStoreState(state => state.color.data)
    const sizData = useStoreState(state => state.size.data)
    const tagData = useStoreState(state => state.tag.data)

    const cartData = useStoreState(state => state.cart.data)
    const addToCart = useStoreActions(action => action.cart.create)
    const updateQuantity = useStoreActions(action => action.cart.update)


    const addToCartHandler = (item) => {
        if (quantity < 1 || quantity > 50) {
            alert('Please provide a valid quantity!')
            return;
        }


        // IF NO HAVE ANY PRODUCT
        if (cartData.length === 0) {
            item.quantity = quantity
            addToCart(item)
            alert('Product add to cart!')
            return;
        }

        // CHECK ALREADY HAVE THIS PRODUCT OR NOT 
        let checkPdt = cartData.filter(pdt => pdt.id === item.id)

        // IF ALREADY NOT ADD THIS PRODUCT
        if (checkPdt.length === 0) {
            item.quantity = quantity
            addToCart(item)
            alert('Product add to cart!')
            return;
        }

        // IF ALREADY ADD THIS PRODUCT
        updateQuantity({ id: item.id, quantity })
        alert('Quantity has been updated successfully!')
    }


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
                                <Col md={6}>
                                    <img src={pdtImg} alt="Product" className="img-fluid" />
                                </Col>
                                <Col md={6}>
                                    {selPdt && Object.keys(selPdt).length > 0 && <>
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

                                        <Input
                                            type='number'
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                        />
                                        <Button onClick={() => addToCartHandler(selPdt)}>Add to Cart</Button>
                                    </>}
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
